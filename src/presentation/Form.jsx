import React from 'react'
import {withYMaps} from 'react-yandex-maps';

const Form = ({inputValue, onChange, onSubmit, location}) => {
  const Input = React.memo(({ymaps}) => {
    const geocodeAddress = async () => {
      const fullAddress = `${location}, ${inputValue}`;

      return await ymaps.geocode(fullAddress)
        .then(res => {
          return res.geoObjects.get(0).geometry.getCoordinates()
        })
    }

    const submitDataPoint = (e) => {
      e.preventDefault()

      geocodeAddress()
        .then(coordinates => {
          const dataPoint = {
            id: `${new Date().getTime()}`,
            address: inputValue,
            coordinates: coordinates,
          }
          onSubmit(dataPoint)
        })
    }

    return (
      <form onSubmit={submitDataPoint}>
        <input
          value={inputValue}
          onChange={onChange}
          autoFocus={true}/>
      </form>
    );
  })

  const ConnectedInput = React.useMemo(() => {
    return withYMaps(Input, true, ['geocode'])
  }, [Input])

  return (
    <ConnectedInput/>
  )
}

export default Form
