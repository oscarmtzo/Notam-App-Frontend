
import React, { Component } from 'react'
import MapGL from "react-map-gl";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";
import {NavLink} from 'react-router-dom'
const token = 'pk.eyJ1Ijoib3NjYXJtdHpvIiwiYSI6ImNqeG0yY21iMDBjZms0MXJ3OGk1czR0dGcifQ.MUnx9WAsYUnVuM60F-dH8Q' 

class SearchableMap extends Component {
  state = { 
    viewport :{
      latitude: -99.074097,
      longitude: 19.4360762,
      zoom: 1
    },
    searchResultLayer: null
  }

  mapRef = React.createRef()

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  handleOnResult = event => {
    this.setState({
      searchResultLayer: new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    })
  }

    render(){
      const { viewport, searchResultLayer} = this.state
      return (
        <div style={{ height: '100vh'}}>
          <MapGL 
            ref={this.mapRef}
            {...viewport}
            mapStyle="mapbox://styles/oscarmtzo/cjykcumna0taj1ckepqoxtmi4"
            width="100%"
            height="90%"
            onViewportChange={this.handleViewportChange}
            mapboxApiAccessToken={token}
            >
                <br/>
              <Geocoder 
                mapRef={this.mapRef}
                onResult={this.handleOnResult}
                onViewportChange={this.handleGeocoderViewportChange}
                mapboxApiAccessToken={token}
                position='top-left'
              ><NavLink to="/private"><button className="session">your session</button></NavLink>
            </Geocoder>
            </MapGL>
            <DeckGL {...viewport} layers={[searchResultLayer]} />
        </div>
      )
    }
}

export default SearchableMap;