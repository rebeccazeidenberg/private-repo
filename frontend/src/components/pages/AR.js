import React from 'react';
// import VModal from './VModal';
//import Modal from './Modal';
//import VModal from './VModal';

class AR extends React.Component {
    render() {
        return (
         
        <>
          {/* <VModal></VModal> */}
          <a-scene
            vr-mode-ui="enabled: false;"
            renderer="logarithmicDepthBuffer: true;"
            embedded
            arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
          >
            <a-nft
              markerhandler
              name = "blue-paint"
              type="nft"
              url="NFTs/blue-painting"
            >
            </a-nft>

            <a-nft
              markerhandler
              name = "trex"
              type="nft"
              url="NFTs/trex-image-big"
            >
            </a-nft>
            
            <a-nft
              markerhandler
              name="disc"
              type="nft"
              url="NFTs/download"
            >
            </a-nft>
            <a-entity camera></a-entity>
          </a-scene>
        </>
        );
    }
}

export default AR;