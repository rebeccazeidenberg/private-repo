import React from 'react';
class AR extends React.Component {
    render() {
        return (
          <a-scene
            vr-mode-ui="enabled: false;"
            renderer="logarithmicDepthBuffer: true;"
            embedded
            arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
          >
            <a-nft
              url="https://maksvet.github.io/ar-test/nft/trex"
              type="nft"
              smooth="true"
              smoothCount="10"
              smoothTolerance=".01"
              smoothThreshold="5"
            >
              <a-entity
                gltf-model="https://ar-js-org.github.io/AR.js/aframe/examples/image-tracking/nft/trex/scene.gltf"
                scale="5 5 5"
                position="50 150 0"
              ></a-entity>
            </a-nft>
            {/* <a-nft
              markerhandler
              type="nft"
              url="https://maksvet.github.io/ar-test/nft/trex"
            >
            </a-nft> */}
            <a-entity camera></a-entity>
          </a-scene>
        );
    }
}

export default AR;