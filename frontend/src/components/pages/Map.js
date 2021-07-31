import React from 'react';
import { Form } from 'react-bootstrap';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { Link } from 'react-router-dom';
import IconHamburger from './../../img/icon-hamburger.png';
import IconMap from './../../img/icon-map.png';
import IconGalleries from './../../img/icon-galleries.png';
import IconSearch from './../../img/icon-search.png';

const Map = () => {
    return(
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 45.0876, lng: -64.3662 }}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const GoogleMaps = () => {
    return(
        <div style={{width: '100vw', height: '100vh'}}>    
            <div className="overlay-buttons-top-left">
                <div className="d-inline-block">
                    <Link to="/map">
                        <img src={IconMap} className="custom-m-t ml-4 shadow-sm img-fluid" alt="Icon One" width={40} heigt={40} />
                    </Link>
                    <Link to="/museums">
                        <img src={IconGalleries} className="custom-m-t shadow-sm img-fluid" alt="Icon Two" width={40} heigt={40} />
                    </Link>
                </div>
            </div>
            <div className="overlay-buttons-top-right">
                <Link to="/options">
                    <img src={IconHamburger} className="custom-m-t shadow-sm img-fluid" alt="Hamburger" width={40} heigt={40} />
                </Link>
            </div>
            <p className="overlay-search-name mt-3 ml-4 mb-0 text-white">SEARCH</p>
            <Form className="overlay-search-box">
                <Form.Group className="d-flex justify-content-between custom-vw-1" controlId="formBasicSearch">
                    <Form.Control className="ml-4 mr-4 search-map border-white border-top-0 border-right-0 border-left-0 bg-transparent" type="search" />
                    <img src={IconSearch} className="custom-m-r shadow-sm img-fluid" alt="Icon Three" width={40} heigt={40} />
                </Form.Group>
            </Form>
            <WrappedMap 
                googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
    )
}

export default GoogleMaps;

