import React from 'react';
//import {geolocated} from 'react-geolocated';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class Home extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyA-AB-9XZd-iQby-bNLYPFyb0pR2Qw3orw')
})(Home)

