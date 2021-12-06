import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import SubmitForm from './form';

function contact() {

    return (
        <div>
            <h1 className="bg-white">Contact Us</h1>
            <SubmitForm />
            <Popup />
        </div>
    )
}

function Popup() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Thank You</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Thank you for your input, we will respond if necessary.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
            <Button onClick ={handleShow}>
                Submit
            </Button>
        </>
    )
}


export default contact
