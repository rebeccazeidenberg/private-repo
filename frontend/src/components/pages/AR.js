import "aframe";
// import "arjs"
import React, { Component } from "react";


class AR extends Component {
    componentDidMount (){ const script = document.createElement("script")

    script.src = "https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js";
    script.async = true;

    document.body.appendChild(script);
    }
  render() {
    return (
      <a-scene vr-mode-ui="enabled: false;"
      renderer="logarithmicDepthBuffer: true;"
      embedded
      arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        <a-nft
      markerhandler
      type="nft"
      url="https://maksvet.github.io/ar-test/nft/trex"
    >
        <a-entity
            gltf-model="https://ar-js-org.github.io/AR.js/aframe/examples/image-tracking/nft/trex/scene.gltf"
            scale="5 5 5"
            position="50 150 0"
        >
        </a-entity>
    </a-nft>
    <a-entity camera></a-entity>
       
      </a-scene>
    );
  }
}



export default AR;
