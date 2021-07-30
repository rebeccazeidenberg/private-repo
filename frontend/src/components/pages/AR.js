import React from 'react';
import 'aframe';
import {Box, Sphere, Cylinder, Plane, Sky, Text, Scene} from 'react-aframe-ar';

const AR = () => {
    return(
        <div>
            <div class="arjs-loader">
                <div>Loading, please wait...</div>
            </div>
            <a-scene
                vr-mode-ui="enabled: false;"
                renderer="logarithmicDepthBuffer: true;"
                embedded
                arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
            >
                <a-nft
                    type="nft"
                    url="https://rebeccazeidenberg.github.io/private-repo/starrynight"
                    smooth="true"
                    smoothCount="10"
                    smoothTolerance=".01"
                    smoothThreshold="5"
                >
                    <a-entity>
                    <div class="sketchfab-embed-wrapper"> 
                        <iframe title="Vincent Van Gogh - Painterly Character Bust" 
                        frameborder="0" 
                        allowfullscreen mozallowfullscreen="true" 
                        webkitallowfullscreen="true" 
                        allow="fullscreen; autoplay; vr" 
                        xr-spatial-tracking 
                        execution-while-out-of-viewport 
                        execution-while-not-rendered 
                        web-share src="https://sketchfab.com/models/f8fe0ee97088403ba4c808141f27c706/embed"> 
                        </iframe> 
                            <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> 
                                <a href="https://sketchfab.com/3d-models/vincent-van-gogh-painterly-character-bust-f8fe0ee97088403ba4c808141f27c706?utm_medium=embed&utm_campaign=share-popup&utm_content=f8fe0ee97088403ba4c808141f27c706" 
                                target="_blank" 
                                style="font-weight: bold; color: #1CAAD9;"> 
                                Vincent Van Gogh - Painterly Character Bust 
                                </a> by 
                                <a href="https://sketchfab.com/chocofries?utm_medium=embed&utm_campaign=share-popup&utm_content=f8fe0ee97088403ba4c808141f27c706" 
                                target="_blank" 
                                style="font-weight: bold; color: #1CAAD9;"> 
                                ChocoFries </a> on 
                                <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=f8fe0ee97088403ba4c808141f27c706" 
                                target="_blank" 
                                style="font-weight: bold; color: #1CAAD9;">
                                Sketchfab</a>
                            </p>
                        </div>
                    </a-entity>
                </a-nft>



                <a-entity camera></a-entity>
            </a-scene>
        </div>
    )
}

export default AR;