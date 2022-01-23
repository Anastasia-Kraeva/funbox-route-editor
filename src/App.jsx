import React from 'react';
import {YMaps} from 'react-yandex-maps';
import RouteEditor from './containers/RouteEditor';

function App() {

  return (
    <YMaps query={{load: 'package.full', apikey: '2d0c3606-cdae-4ac6-bd49-4fb07f02f51d&lang=ru_RU'}}>
      <RouteEditor/>
    </YMaps>
  )
}

export default App;
