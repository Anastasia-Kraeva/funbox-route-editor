import React from 'react';
import {YMaps} from 'react-yandex-maps';
import PointsList from './presentation/PointsList';
import Form from './presentation/Form';
import RouteEditorMap from './containers/RouteEditorMap';

function App() {
  // i need to take the logic out of here
  const [inputValue, setInputValue] = React.useState('')
  const [points, setPoints] = React.useState([{
    id: '1', name: 'home', address: 'address1', coordinates: [56.326793, 44.006437]
  }, {id: '2', name: 'work', address: 'address2', coordinates: [56.326793, 44.005063708984245]}])

  const addPoint = (e) => {
    e.preventDefault()
    setPoints([...points, {
      id: `${new Date().getTime()}`,
      name: inputValue,
      address: 'address3',
      coordinates: [56.36793, 44.005063708984245]
    }])
    setInputValue('')
  }

  const deletePoint = (e) => {
    setPoints(points.filter(el => el.id !== e.target.id))
  }

  const changeAddressPoint = (pointId, newCoordinates) => {
    setPoints(points.map(el => {
      if (el.id === pointId) {
        return {...el, coordinates: newCoordinates}
      }
      return el
    }))
  }

  return (
    <YMaps query={{load: 'package.full', apikey: '2d0c3606-cdae-4ac6-bd49-4fb07f02f51d&lang=ru_RU'}}>
      <div className="points-box">
        <Form
          inputValue={inputValue}
          onChange={e => {
            setInputValue(e.target.value)
          }}
          onSubmit={addPoint}/>
        <PointsList points={points} onClick={deletePoint}/>
      </div>
      <RouteEditorMap points={points} changeAddressPoint={changeAddressPoint}/>
    </YMaps>
  )
}

export default App;
