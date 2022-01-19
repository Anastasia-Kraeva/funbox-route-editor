/*
import React from 'react'
import {withYMaps} from 'react-yandex-maps';

const Form = ({inputValue, onChange, onSubmit}) => {

  const Input = React.memo(({ymaps}) => {
    const onLoad = () => {
      ymaps.geolocation
        .get({
          provider: "browser",
          mapStateAutoApply: true
        })
        .then(res => {
          console.log(res.geoObjects.position);
          console.log(res.geoObjects.get(0).properties.get('text'));
          //how to get an address in the react
        })
    }

    React.useEffect(() => {
      onLoad();
    }, []);

    return (
      <form onSubmit={onSubmit}>
        <input value={inputValue} onChange={onChange} autoFocus={true}/>
      </form>
    );
  })
  //input loses focus due to redrawing in response to a state change (added autoFocus)

  const ConnectedInput = React.useMemo(() => {
    return withYMaps(Input, true, ["geolocation", "geocode"])
  }, [Input])

  return (
    <ConnectedInput/>
  )
}

export default Form
*/

//why use the api if you can work with it in the parent
function Input({inputValue, onChange, onSubmit}) {

  return (
    <form onSubmit={onSubmit}>
      <input value={inputValue} onChange={onChange}/>
    </form>
  );
}

export default Input;
