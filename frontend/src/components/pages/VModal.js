import React, {useState} from 'react';
// import ReactDOM from 'react-dom'

import ReactAudioPlayer from 'react-audio-player';



const VModal= (props) => {
    
    const closeModal = () => {
            document.getElementsByClassName("modal")[0].style.display="none"
    }

    return (
        <>
            <div className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here. {props.name}</p>
                                <ReactAudioPlayer
                                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                                // autoPlay
                                controls controlsList="nodownload"
                                />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" variant="primary" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VModal