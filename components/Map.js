import React from 'react'
import Map, {Marker, Popup} from 'react-map-gl';
import { useState } from 'react';
import { getCenter } from 'geolib';

const Maps = ({ searchResults }) => {

  const [viewport, setviewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 8.6753,
    longitude: 9.0820,
    // zoom: 8
  })

  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat
  }))

  // console.log(coordinates)

  const center = getCenter(coordinates)


  return (
    <div>
      <Map 
        mapStyle={'mapbox://styles/bandelefemi/cl9txtemy003014mi5yoe4pgc'}
        mapboxAccessToken={process.env.mapbox_key}
        longitude = {center.longitude}
        latitude = {center.latitude}
        // viewState ={(nextViewport) => setviewport(nextViewport)}
        // {...viewport}
        // onViewportChange = {(viewport) => setviewport(viewport)}
        >

          {searchResults.map((result)=> (
            
              <Marker key={result.long}
                longitude={result.long}
                latitude={result.lat} >
                  <p className='cursor-pointer text-3xl'>P</p>
                </Marker>
            
          ))}
        </Map>
        
        
         
    </div>
  )
}

export default Maps
