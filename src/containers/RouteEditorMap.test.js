import {cleanup, render} from '@testing-library/react';
import RouteEditorMap from './RouteEditorMap';
import React from 'react';

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
  // let location = ''

  const changePoint = jest.fn((newPoints) => {
    points = newPoints
  })

  const setLocation = jest.fn((newLocation) => {
    // location = newLocation
  })

  render(<RouteEditorMap points={points}
                         changePoint={changePoint}
                         setLocation={setLocation}/>)

  beforeEach(() => {
  })

  afterEach(cleanup)
})