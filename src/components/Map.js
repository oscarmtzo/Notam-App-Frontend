import React, {useState} from 'react'
import MapGL, {GeolocateControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN= 'pk.eyJ1Ijoib3NjYXJtdHpvIiwiYSI6ImNqeG0yY21iMDBjZms0MXJ3OGk1czR0dGcifQ.MUnx9WAsYUnVuM60F-dH8Q'

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};

const Map = () => {

  const [viewport, setViewPort ] = useState({
    width: "100%",
    height: '50vh',
    latitude: 0,
    longitude: 0,
    zoom: 8
  })
  const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })
  
  return (
      <div style={{ margin: '0 auto'}}>
      <h1 style={{textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>GeoLocator: Click To Find Your Location or click <a href="/search">here</a> to search for a location</h1>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/oscarmtzo/cjykcumna0taj1ckepqoxtmi4"
        onViewportChange={_onViewportChange}
        >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: false}}
          trackUserLocation={true}
          />
      </MapGL>
    </div>
  )
}
/*
class Map extends Component {
    componentDidMount() {
        const map = new ReactMapGL.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/oscarmtzo/cjykcumna0taj1ckepqoxtmi4',
            center: [-99.074097, 19.4360762],
            zoom: 8
        })
        // map.Popup = () => {
           
        // }
    }
    
    render() {
        return(
            <div>
                <div style = {{
                    width:"100vw", height:"100vh"}} ref={e => (this.mapContainer= e)}/>
            </div>
        )
    }
}
ReactMapGL.accessToken = 'pk.eyJ1Ijoib3NjYXJtdHpvIiwiYSI6ImNqeG0yY21iMDBjZms0MXJ3OGk1czR0dGcifQ.MUnx9WAsYUnVuM60F-dH8Q'
*/

export default Map