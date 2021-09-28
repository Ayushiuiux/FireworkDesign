import '../assets/css/style.css'
import { Col, Container, Row, Image, FormControl, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';


import Header from './header';
import char1 from '../assets/images/character/char1.png';
import char2 from '../assets/images/character/char2.png';
import char3 from '../assets/images/character/char3.png';
import char4 from '../assets/images/character/char4.png';
import char7 from '../assets/images/character/char7.png';
import char8 from '../assets/images/character/char8.png';
import char9 from '../assets/images/character/char9.png';
import bottom_line_style from '../assets/images/bottom_line_style.png';
import top_line_style from '../assets/images/top_line_style.png';
import box_style from '../assets/images/box_style.png';
import char_brand from '../assets/images/char_brand.png';
import cards from '../assets/images/cards1.png';
import reload from '../assets/images/reload.png';
import search from '../assets/images/search.png';
import synthesis_image from '../assets/images/synthesis_image.png';
import composition_icon from '../assets/images/composition_icon.png';
import decomposition_icon from '../assets/images/decomposition_icon.png';
import Subtraction_icon from '../assets/images/Subtraction_icon.png';
import Hellscream from '../assets/images/Hellscream.png';


export default function CardSynthesis() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="mainInterface_page">
            <Header></Header>
            <section>
                <Container fluid className="px-4 my-3 d-inline-block w-100">
                    <div className="">
                        <Row>
                            <Col xs="12" md="2">
                                <div className="card_synth_fstleft">
                                    <div className="synth_char_img">
                                        <Image src={synthesis_image} fluid></Image>
                                    </div>
                                    <div className="synth_char_cont">
                                        <ul className="list-inline synth_char_cont_hdng">
                                            <li className="list-inline-item">
                                                <Image src={Subtraction_icon} fluid className="Subtraction_img" />
                                                <Image src={composition_icon} fluid className="synth_cmpdem_img"></Image>
                                            </li>
                                            <li className="list-inline-item">
                                                <h4>Cards Composition</h4>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled synth_char_cont_data">
                                            <li>
                                                <p>Drag the card from the right bar into the left bar to Composition.</p>
                                                <span>(Ten cards are required for synthesis)</span>
                                            </li>
                                            <li>
                                                <p>You can also use dust to synthesize cards.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="synth_char_cont">
                                        <ul className="list-inline synth_char_cont_hdng">
                                            <li className="list-inline-item">
                                                <Image src={Subtraction_icon} fluid className="Subtraction_img" />
                                                <Image src={decomposition_icon} fluid className="synth_cmpdem_img"></Image>
                                            </li>
                                            <li className="list-inline-item">
                                                <h4>Cards Decomposition</h4>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled synth_char_cont_data">
                                            <li>
                                                <p>Drag the card from the right bar into the left bar to break it down.</p>
                                            </li>
                                            <li>
                                                <p>Breaking down the cards will get the dust of the corresponding properties.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col xs="12" md="6">
                                <div className="characters_box_left card_synth_center">
                                    <Row>
                                        <Col xs="12" md="3">
                                            <div className="top_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char1} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={bottom_line_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <div className="top_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char2} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={bottom_line_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <div className="top_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char3} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={bottom_line_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <div className="top_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char4} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={bottom_line_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <div className="top_char_line">
                                                <Image src={top_line_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char7} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <div className="top_char_line">
                                                <Image src={top_line_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char8} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <div className="top_char_line">
                                                <Image src={top_line_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char9} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <div className="top_char_line">
                                                <Image src={top_line_style} fluid></Image>
                                            </div>
                                            <Link to="#" className="char_card">
                                                <Image src={char1} fluid className="char_img"></Image>
                                            </Link>
                                            <div className="botm_char_line">
                                                <Image src={box_style} fluid></Image>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="synth_comp_decomp_buttons">
                                        <Button className="synth_comp_btn">Composition</Button>
                                        <Button className="synth_decomp_btn">Decomposition</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="position-relative card_synth_right">
                                    <div className="position-relative card_synth_right_top">
                                        <div className="card_detail_form">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Image src={cards} fluid className="crd_dtl_img"></Image>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Form.Group className="mb-0 btn_drpdwn" controlId="legend_field">
                                                        <Form.Select className="select_form_input" aria-label="Default select example">
                                                            <option>LEGEND</option>
                                                            <option value="1">one</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span className="card_level_txt"><b>143/</b>230</span>
                                                </li>
                                            </ul>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Image src={reload} fluid className="crd_dtl_img"></Image>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Form.Group className="mb-0 btn_drpdwn" controlId="legend_field">
                                                        <Form.Select className="select_form_input" aria-label="Default select example">
                                                            <option>SCIENTIST</option>
                                                            <option value="1">one</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span className="card_level_txt"><b>32/</b>70</span>
                                                </li>
                                            </ul>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Image src={search} fluid className="crd_dtl_img"></Image>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="mb-0 card_search">
                                                        <FormControl
                                                            type="search"
                                                            placeholder="SEARCH FOR CARDS"
                                                            className="mr-2 card_search_field"
                                                            aria-label="Search"
                                                        />
                                                    </div>
                                                </li>
                                                <li className="list-inline-item"></li>
                                            </ul>
                                        </div>
                                        <div className="card_char_slider">
                                            <Carousel interval={null}>
                                                <Carousel.Item>
                                                    <Image src={char_brand} fluid></Image>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image src={char_brand} fluid></Image>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image src={char_brand} fluid></Image>
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                    </div>
                                    <div className="synth_modal_char">
                                        <ul className="list-unstyled">
                                            <li className="synth_modal_char_view">
                                                <Button onClick={handleShow} className="synth_chr_btn">
                                                    <Image src={Hellscream} fluid />
                                                    {/* <span className="synth_ttl_card">X1</span> */}
                                                    <h5 className="synth_chr_btn_txt">Hellscream</h5>
                                                </Button>
                                            </li>
                                            <li className="synth_modal_char_view">
                                                <Button onClick={handleShow} className="synth_chr_btn">
                                                    <Image src={Hellscream} fluid />
                                                    {/* <span className="synth_ttl_card">X1</span> */}
                                                    <h5 className="synth_chr_btn_txt">Wormhole Claws</h5>
                                                </Button>
                                            </li>
                                            <li className="synth_modal_char_view">
                                                <Button onClick={handleShow} className="synth_chr_btn">
                                                    <Image src={Hellscream} fluid />
                                                    {/* <span className="synth_ttl_card">X1</span> */}
                                                    <h5 className="synth_chr_btn_txt">Purple Swirl</h5>
                                                </Button>
                                            </li>
                                            <li className="synth_modal_char_view">
                                                <Button onClick={handleShow} className="synth_chr_btn">
                                                    <Image src={Hellscream} fluid />
                                                    {/* <span className="synth_ttl_card">X1</span> */}
                                                    <h5 className="synth_chr_btn_txt">Hellscream</h5>
                                                </Button>
                                            </li>
                                            <li className="synth_modal_char_view">
                                                <Button onClick={handleShow} className="synth_chr_btn synth_chr_btn_value">
                                                    <Image src={Hellscream} fluid />
                                                    <span className="synth_ttl_card">X1</span>
                                                    <h5 className="synth_chr_btn_txt">Wormhole Claws</h5>
                                                </Button>
                                            </li>
                                            <li className="synth_modal_char_view">
                                                <Button onClick={handleShow} className="synth_chr_btn">
                                                    <Image src={Hellscream} fluid />
                                                    {/* <span className="synth_ttl_card">X1</span> */}
                                                    <h5 className="synth_chr_btn_txt">Purple Swirl</h5>
                                                </Button>
                                            </li>
                                            <li className="synth_modal_char_view">
                                                <Button onClick={handleShow} className="synth_chr_btn">
                                                    <Image src={Hellscream} fluid />
                                                    {/* <span className="synth_ttl_card">X1</span> */}
                                                    <h5 className="synth_chr_btn_txt">Hellscream</h5>
                                                </Button>
                                            </li>
                                            <li className="synth_modal_char_view">
                                                <Button onClick={handleShow} className="synth_chr_btn synth_chr_btn_value">
                                                    <Image src={Hellscream} fluid />
                                                    <span className="synth_ttl_card">X1</span>
                                                    <h5 className="synth_chr_btn_txt">Wormhole Claws</h5>
                                                </Button>
                                            </li>
                                        </ul>


                                        <Modal show={show} onHide={handleClose} className="stnth_card_modal">
                                            <Modal.Header closeButton>
                                                <Modal.Title>Modal heading</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                                <Button variant="primary" onClick={handleClose}>
                                                    Save Changes
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </div>
    )
};