import React, { Component } from "react";
import { Marker} from "react-google-maps";
import InfoWindowComponent from "./InfoWindowComponent";
import old2 from './../../img/old2.38 1@2x.png'

class MarkerComponent extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
  }

  toggleOpen() {
    this.setState({
      isOpen: true,
    });
  }

  toggleClose() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
      
    return (
      <Marker
      position={{ lat: 45.0876, lng: -64.3662 }}
      icon={{
        url:old2, 
        scaledSize: {width: 40, height: 25}
      }}
        onClick={this.toggleOpen}
      >
        {this.state.isOpen && (
          <InfoWindowComponent toggleClose={this.toggleClose} />
        )}
      </Marker>
    );
  }
}

export default MarkerComponent;