import React, {useRef} from 'react'
import {Map, Placemark} from 'react-yandex-maps';

function RouteEditorMap({points, changePoint, setLocation}) {
  const mapRef = useRef(null)

  const getLocation = (ymaps) => {
    return ymaps.geolocation
      .get({
        provider: 'browser',
        mapStateAutoApply: true
      })
  }

  const changeDataLocation = (ymaps) => {
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

  const changePointAddress = (pointId, newCoordinates) => {
    changePoint(points.map(el => {
        if (el.id === pointId) {
          return {id: el.id, address: '?', coordinates: newCoordinates}
        }
        return el
      })
    )
  }

  return (
    <Map
      width={'100%'}
      height={'100%'}
      onLoad={ymaps => changeDataLocation(ymaps)}
      defaultState={{
        center: [55.76, 37.64],
        zoom: 11,
      }}
      instanceRef={mapRef}>
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
      {/*<Polyline
        geometry={points.map(el => el.coordinates)}
        options={{
          balloonCloseButton: false,
          strokeColor: '#000',
          strokeWidth: 4,
          strokeOpacity: 0.5,
        }}
      />*/}
    </Map>
  )
}

export default RouteEditorMap;
