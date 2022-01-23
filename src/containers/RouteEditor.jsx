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
