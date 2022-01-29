import React from 'react';
import Form from '../presentation/Form';
import PointsList from '../presentation/PointsList';
import RouteEditorMap from './RouteEditorMap';


function RouteEditor() {
  const [inputValue, setInputValue] = React.useState('')
  const [points, setPoints] = React.useState([{
    id: '1642930415115',
    address: 'даля 1',
    coordinates: [56.31913, 43.955528],
  },
    {
      id: '2642930415116',
      address: 'геологов 1',
      coordinates: [56.248646, 43.987661],
    },
    {
      id: '1642934782504',
      address: 'родионова 1',
      coordinates: [56.320822, 44.044084],
    }])
  const [location, setLocation] = React.useState('')

  const addPoint = (dataPoint) => {
    setPoints([...points, dataPoint])
    setInputValue('')
  }

  const deletePoint = (e) => {
    setPoints(points.filter(el => el.id !== e.target.id))
  }

  const changePoint = (newPointsLost) => {
    setPoints(newPointsLost)
  }

  return (
    <>
      <div className="points-box">
        <Form
          inputValue={inputValue}
          onChange={e => {
            setInputValue(e.target.value)
          }}
          onSubmit={addPoint}
          location={location}/>
        <PointsList
          points={points}
          onClick={deletePoint}/>
      </div>
      <RouteEditorMap
        points={points}
        changePoint={changePoint}
        setLocation={setLocation}/>
    </>
  )
}

export default RouteEditor;
