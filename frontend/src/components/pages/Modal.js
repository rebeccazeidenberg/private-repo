import React from 'react';
import {Modal} from 'react-bootstrap';

const ARModal = (props) => {
    return (
        <div className="AR-modal">
            <Modal className="Test" show={props.showModal}>
                <Modal.Header>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            </Modal>
        </div>
    )
}

export default ARModal