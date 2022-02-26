import {cleanup, render} from '@testing-library/react';
import RouteEditorMap from './RouteEditorMap';
import React from 'react';
import {YMaps} from 'react-yandex-maps';
import Form from '../presentation/Form';

describe('RouteEditorMap component:', () => {
  let points = [
    {
      id: '1642930415115',
      address: 'даля 1',
      coordinates: [56.31913, 43.955528],
      order: 2,
    },
    {
      id: '2642930415116',
      address: 'геологов 1',
      coordinates: [56.248646, 43.987661],
      order: 3,
    },
    {
      id: '1642934782504',
      address: 'родионова 1',
      coordinates: [56.320822, 44.044084],
      order: 1,
    }
  ]
  let location = ''
  let inputValue = ''

  const setPoints = jest.fn((newPoints) => {
    points = newPoints
  })

  const deletePoint = jest.fn((point) => {
    setPoints(points.filter(el => el.id !== point.id))
  })

  const addPoint = jest.fn((newInputValue) => {
    inputValue = newInputValue
  })

  const setInputValue = jest.fn((newInputValue) => {
    inputValue = newInputValue
  })

  const changePoint = jest.fn((newPoints) => {
    points = newPoints
  })

  const setLocation = jest.fn((newLocation) => {
    location = newLocation
  })

  const setup = () => render(
    <YMaps query={{load: 'package.full', apikey: '2d0c3606-cdae-4ac6-bd49-4fb07f02f51d&lang=ru_RU'}}>
      <>
        <div className="points-box">
          <Form
            inputValue={inputValue}
            onChange={e => {
              setInputValue(e.target.value)
            }}
            onSubmit={addPoint}
            location={location}/>
          {/*<PointsList
            points={points}
            setPoints={setPoints}
            onClick={deletePoint}/>*/}
        </div>
        <RouteEditorMap
          points={points}
          changePoint={changePoint}
          setLocation={setLocation}/>
      </>
    </YMaps>)

  beforeEach(() => {
  })

  afterEach(cleanup)

  // describe('RouteEditorMap', () => {
  //   test('Map', () => {
  //     setup()
  //   });
  // });
})