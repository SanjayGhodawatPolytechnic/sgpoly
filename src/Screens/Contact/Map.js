import React from "react";

import Main from "../../ReusableComponents/Main";
import "./CSS/Map.css";
import GoogleMapReact from "google-map-react";
import { Component } from "react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class LocationMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <Main className="">
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBDc_OHT3xT5S8s60dwPr6I1hqs_wvVp_E",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={16.742907}
              lng={74.38317}
              text="Sanjay ghodawat polytechnic"
            />
          </GoogleMapReact>
        </div>
      </Main>
    );
  }
}

export default LocationMap;
