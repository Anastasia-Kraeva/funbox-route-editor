import {cleanup, render, screen} from '@testing-library/react';
import PointsList from './PointsList';
import React from 'react';

describe('PointsList component:', () => {
  describe('should be rendered', () => {

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

    const setPoints = jest.fn((newPoints) => {
      points = newPoints
    })

    const deletePoint = jest.fn((point) => {
      setPoints(points.filter(el => el.id !== point.id))
    })

    const setup = () => render(<PointsList points={points}
                                           setPoints={setPoints}
                                           onClick={deletePoint}/>);

    afterEach(cleanup)

    test('list', () => {
      setup()
      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    test('list items', () => {
      setup()
      points.forEach((el) => {
        expect(screen.getByText(el.address)).toBeInTheDocument();
      })
    });

    test('buttons to delete list items', () => {
      setup()
      screen.getAllByText('cancel').forEach((el, i, arr) => {
        expect(arr.length === points.length).toBeTruthy()
        expect(el).toHaveProperty('id', points[i].id)
      })
    });
  })
});
