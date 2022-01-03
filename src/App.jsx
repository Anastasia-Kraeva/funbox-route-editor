import PointsList from './presentation/PointsList';
import Input from './presentation/Input';
import Map from './containers/Map';
import {useState} from 'react';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [points, setPoints] = useState([{id: 1, name: 'home', address: ''}, {id: 2, name: 'work', address: ''}])

  const addPoint = (e) => {
    e.preventDefault()
    setPoints([...points, {id: new Date().getTime(), name: inputValue, address: ''}])
    setInputValue('')
  }

  return (
    <>
      <div className="points-box">
        <Input
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value)
          }}
          onSubmit={addPoint}/>
        <PointsList points={points}/>
      </div>
      <Map/>
    </>
  )
}

export default App;
