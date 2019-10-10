import React, {Component} from 'react'
import ReactMapGL from 'mapbox-gl';


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

export default Map