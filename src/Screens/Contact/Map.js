import React from 'react';
import Main from '../../ReusableComponents/Main';

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
const Map = ReactMapboxGl({
    accessToken:
    'pk.eyJ1IjoieWFzaDEwIiwiYSI6ImNrYnRiaXQwMTA4ZzMzNW42ZnpnamVyZnkifQ.3QjWS75fymRHz312BZWWiQ'
  });
var DeviceWidth = window.innerWidth;
var DeviceHeight = window.innerHeight
    

function LocationMap() {
    
  return (
      <Main className="">          
            <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: DeviceHeight-2,
                width: DeviceWidth-2,
                marginRight:20
            }}
            center={[74.381733, 16.742249]}
            zoom={[14]}
            >                            
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[ 74.381733, 16.742249]} />
            </Layer>            
            </Map>        
      </Main>
  );
}

export default LocationMap;
