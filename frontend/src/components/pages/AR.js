import React from 'react';
class AR extends React.Component {
    render() {
        return (
            
                <a-scene arjs='sourceType: webcam; debugUIEnabled: false'>
                    <a-anchor hit-testing-enabled="true">
                        <a-box position='0 0 0.5' material='opacity: 0.7; color: yellow;'></a-box>
                    </a-anchor>
                    <a-camera-static preset="hiro" />
                </a-scene>
        
        );
    }
}

export default AR;