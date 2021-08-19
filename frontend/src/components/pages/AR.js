import React from 'react';
import VModal from './VModal';


class AR extends React.Component {
  
    render() {
      
        return (
         
        <>
          <VModal></VModal>
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
              name = "modal"
              type="nft"
              url="NFTs/krishna"
            >
            </a-nft>
            
            <a-nft
              markerhandler
              name="disc"
              type="nft"
              url="NFTs/download"
            >
            </a-nft>

            <a-nft
              markerhandler
              name = "arc"
              type="nft"
              url="NFTs/arc"
            >
            </a-nft>

            <a-nft
              markerhandler
              name = "ganesha"
              type="nft"
              url="NFTs/ganesha"
            >
            </a-nft>

            <a-nft
              markerhandler
              name = "krishna"
              type="nft"
              url="NFTs/krishna"
            >
            </a-nft>

            <a-nft
              markerhandler
              name = "musical_allegory"
              type="nft"
              url="NFTs/musical_allegory"
            >
            </a-nft>

            <a-nft
              markerhandler
              name = "pharaoh"
              type="nft"
              url="NFTs/pharaoh"
            >
            </a-nft>

            <a-nft
              markerhandler
              name = "shark"
              type="nft"
              url="NFTs/shark"
            >
            </a-nft>

            <a-nft
              markerhandler
              name = "starry_night"
              type="nft"
              url="NFTs/starry_night"
            >
            </a-nft>

            
            <a-entity camera></a-entity>
          </a-scene>
        </>
        );
    }
}

export default AR;