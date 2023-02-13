import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

 function Contact () {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  return (
    <YMaps>
        <div className='Map'>
      <Map defaultState={defaultState} width={800} height={500}> 
        <Placemark geometry={[55.684758, 37.738521]} />
      </Map>
        </div>
    </YMaps>
  );
}

export default Contact  