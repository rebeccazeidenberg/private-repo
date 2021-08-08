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
              markerhandler
              type="nft"
              url="https://maksvet.github.io/ar-test/nft/trex"
            >
            </a-nft>
            <a-entity camera></a-entity>
          </a-scene>
        );
    }
}

export default AR;