import React from "react";
import { InfoWindow } from "react-google-maps";
import { useHistory } from "react-router-dom";

const InfoWindowComponent = (props) => {
    const history = useHistory();
  
    const handleRoute = () =>{ 
      history.push("/arvr");
    }
    
  return (
      
    <InfoWindow onCloseClick={props.toggleClose} options={{ maxWidth: 320 }}>
    <div onClick={handleRoute}>Welcome to 3rdilab Gallery! Click this window to go to our AR/VR experience!</div>
    </InfoWindow>
  );
};

export default InfoWindowComponent;