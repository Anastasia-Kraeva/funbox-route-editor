import {Map, Placemark} from 'react-yandex-maps';
import {useRef} from 'react';

function RouteEditorMap({points, changeAddressPoint}) {
  const mapRef = useRef(null)

  return (
    <Map
      width={'100%'}
      height={'100%'}
      defaultState={{
        center: [56.326793, 44.006437],
        zoom: 12,
      }}
      instanceRef={mapRef}>
      {
        points.map(point => {
          return (
            <Placemark
              key={point.id}
              geometry={point.coordinates}
              properties={{
                balloonContentHeader: point.name,
                hintContent: point.address,
              }}
              options={{
                draggable: true,
              }}
              modules={
                ['geoObject.addon.balloon', 'geoObject.addon.hint', 'geocode']
              }
              onDragEnd={event => {
                const coordinates = event.originalEvent.target.geometry.getCoordinates();
                changeAddressPoint(point.id, coordinates)
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
