import React from 'react'
import { Container, Row, Modal } from 'react-bootstrap'

export default function UnpackAnimationPop(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} centered>
                <Container className="wallet_popup_container">
                    <Row>
                        <div className="wallet_popup_div">                            
                            <Modal.Body>{props.card} </Modal.Body>
                        </div>
                    </Row>
                </Container>
            </Modal>
        </>
    )
}
