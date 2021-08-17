import React, {useState} from 'react';


const VModal= () => {
    
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);

    return (
        <>
            <div className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header" closeButton>
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" variant="primary">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VModal