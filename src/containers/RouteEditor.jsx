import React from 'react';
import Form from '../presentation/Form';
import PointsList from '../presentation/PointsList';
import RouteEditorMap from './RouteEditorMap';


function RouteEditor() {
  const [inputValue, setInputValue] = React.useState('')
  const [points, setPoints] = React.useState([])
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
          setPoints={setPoints}
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
