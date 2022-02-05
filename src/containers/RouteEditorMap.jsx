import React, {useRef} from 'react'
import {Map, Placemark, Polyline} from 'react-yandex-maps';

function RouteEditorMap({points, changePoint, setLocation}) {
  const mapRef = useRef(null)
  const [ymaps, setYmaps] = React.useState(null)

  const geocodeCoordinates = async (coordinates) => {
    return await ymaps.geocode(coordinates)
      .then(async res => {
        const fullAddress = await res.geoObjects.get(0).properties.get('text')
        return fullAddress.split(', ').slice(2).join(', ')
      })
  }

  const getLocation = (ymaps) => {
    return ymaps.geolocation
      .get({
        provider: 'browser',
        mapStateAutoApply: true
      })
  }

  const changeDataLocation = (ymaps) => {
    setYmaps(ymaps)
    getLocation(ymaps)
      .then(res => {
        const currentLocation = res.geoObjects.get(0).properties.get('text')
        setLocation(currentLocation)
        return res
      })
      .then(res => {
        const coordinates = res.geoObjects.get(0).geometry.getCoordinates()
        mapRef.current.setCenter(coordinates)
      })
  }

  const changePointAddress = async (pointId, newCoordinates) => {
    points.forEach(el => {
      geocodeCoordinates(newCoordinates).then((newAddress) => {
        if (el.id === pointId) {
          const filteredPoints = points.filter(el => el.id !== pointId)
          changePoint([...filteredPoints, {...el, address: newAddress, coordinates: newCoordinates}])
        }
      })
    })
  }

  return (
    <Map
      width={'100%'}
      height={'100%'}
      onLoad={ymaps => {
        changeDataLocation(ymaps)
      }}
      defaultState={{
        center: [55.76, 37.64],
        zoom: 11,
        controls: [],
      }}
      instanceRef={mapRef}
    >
      <Polyline
        geometry={points.map(el => el.coordinates)}
        options={{
          balloonCloseButton: false,
          strokeColor: '#000',
          strokeWidth: 4,
          strokeOpacity: 0.5,
        }}
      />

      {
        points.map(point => {
          return (
            <Placemark
              key={point.id}
              geometry={point.coordinates}
              properties={{
                balloonContentHeader: point.address,
              }}
              options={{
                draggable: true,
              }}
              modules={
                ['geoObject.addon.balloon', 'geocode']
              }
              onDragEnd={event => {
                const coordinates = event.originalEvent.target.geometry.getCoordinates();
                changePointAddress(point.id, coordinates)
              }}
            />
          )
        })
      }
    </Map>
  )
}

export default RouteEditorMap;
