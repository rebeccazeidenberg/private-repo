import React from 'react';
import 'aframe';
import {Box, Sphere, Cylinder, Plane, Sky, Text, Scene} from 'react-aframe-ar';

const AR = () => {
    return(
        <div>
            <a-scene>
            <div class="arjs-loader">
                <div>Loading, please wait...</div>
            </div>

            
            </a-scene>
        </div>
    )
}

export default AR;