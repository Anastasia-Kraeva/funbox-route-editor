//      текстового поля ввода для новых точек маршрута;
import {render, screen} from '@testing-library/react';
import Form from './Form';
import React from 'react';

describe('Form component', () => {
  describe('should be rendered', () => {
    let points = []
    let inputValue = ''
    let location = ''

    const addPoint = jest.fn((newPoint) => {
      points.push(newPoint)
    })

    // const setLocation = jest.fn((newLocation) => {
    //   location = newLocation
    // })

    const setInputValue = jest.fn((newInputValue) => {
      inputValue = newInputValue
    })

    const setup = () => {
      const Yandex = () => jest.mock({
        api: {
          geocode: jest.fn(),
          Balloon: 'ƒ c() {}',
          Circle: 'ƒ i() {}',
          ClusterPlacemark: 'ƒ d() {}',
          Clusterer: 'ƒ C() {}',
          Collection: 'ƒ l() {}',
          DomEvent: 'ƒ i() {}',
          Event: 'ƒ n() {}',
          GeoObject: 'ƒ c() {}',
          GeoObjectArray: 'ƒ o() {}',
          GeoObjectCollection: 'ƒ r() {}',
          GeoQueryResult: 'ƒ GeoQueryResult() {}',
          Hint: 'ƒ r() {}',
          Hotspot: 'ƒ s() {}',
          Layer: 'ƒ p() {}',
          LayerCollection: 'ƒ h() {}',
          LoadingObjectManager: 'ƒ C() {}',
          Map: 'ƒ J() {}',
          MapEvent: 'ƒ r() {}',
          MapType: 'ƒ t() {}',
          Monitor: 'ƒ s() {}',
          ObjectManager: 'ƒ u() {}',
          Placemark: 'ƒ o() {}',
          Polygon: 'ƒ r() {}',
          Polyline: 'ƒ i() {}',
          Popup: 'ƒ c() {}',
          Rectangle: 'ƒ c() {}',
          RemoteObjectManager: 'ƒ C() {}',
          SuggestView: 'ƒ g() {}',
          Template: 'ƒ n() {}',
          __provideBundle: 'ƒ bound resolve() {}',
        }
      })
      const YMapsContext = React.createContext(Yandex)
      const context = {
        getApi: jest.fn().mockReturnValue({value: Yandex})
      }

      render(
        <YMapsContext.Provider value={{Yandex}}>
          <Form
            inputValue={inputValue}
            onChange={e => {
              setInputValue(e.target.value)
            }}
            onSubmit={addPoint}
            location={location}/>
        </YMapsContext.Provider>
      )
    }

    test('input', () => {
      setup()
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  })
})
