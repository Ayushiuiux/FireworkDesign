import React from "react";
import Header from "./header";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import '../assets/css/style.css';
import intslr_logo_img from '../assets/images/intslr_logo_img.png';
import single_right_arrow from '../assets/images/single_right_arrow.png';
import single_left_arrow from '../assets/images/single_left_arrow.png';
// import OrangeBar from '../assets/images/interstellar-page/orange-bar.png';
import clock_count from '../assets/images/interstellar-page/clock_count.png';
// import GreyPattern from '../assets/images/interstellar-page/pattern-bg.png';
// import BluePattern from '../assets/images/interstellar-page/blue-pattern.png';
import package_grey from '../assets/images/interstellar-page/package_grey.png';
import UpArrow from '../assets/images/interstellar-page/up-arrow.png';

export default function InterstellarTrader() {
    return (
        <div class="interstellar_page">
            <Header />
            <div className="interstellar_bg mt-4">
                <Container>
                    <Row>
                        <Col xs="12" md="4" className="ms-auto">
                            <ul className="list-inline top_right_sign">
                                <li className="list-inline-item sign_li">
                                    <div className="signlink_bg">
                                        <Link className="signIn">Sign In</Link>
                                    </div>
                                </li>
                                <li className="list-inline-item loader_li">
                                    <div class="intslr_loader">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"></li>
                                            <li className="list-inline-item"></li>
                                            <li className="list-inline-item"></li>
                                            <li className="list-inline-item"></li>
                                            <li className="list-inline-item"></li>
                                            <li className="list-inline-item"></li>
                                            <li className="list-inline-item"></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="list-inline-item ins_log_li">
                                    <div class="intslr_logo_icon">
                                        <Image src={intslr_logo_img} fluid />
                                    </div>
                                </li>
                            </ul>
                            <div className="top_sign_note">
                                <Image src={UpArrow} fluid />
                                <p>Get a trophy pack for fully seven-day sign-in.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="py-5">
                        <Col xs="12" md="7">
                            <div className="instrelr_left">
                                <ul className="list-inline instrelr_tp_heading">
                                    <li className="list-inline-item">
                                        <Link to="/interstellar_trader_classical" className="arrow_link">
                                            <Image src={single_left_arrow} fluid className="single_arrow" />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0 package_heading">Spark Camp Pack</h5>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="/interstellar_trader_treasured" className="arrow_link">
                                            <Image src={single_right_arrow} fluid className="single_arrow" />
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="list-inline instrelr_time_count">
                                    <li className="list-inline-item">
                                        <Image src={clock_count} fluid className="inst_clock_count" />
                                    </li>
                                    <li className="list-inline-item inst_count_down">
                                        <span>16</span> <b>Days</b>
                                        <span>12</span> <b>Hours</b>
                                        <span>45</span> <b>Minutes</b>
                                    </li>
                                </ul>
                                <div className="open_buy_grp">
                                    <Link to="/open_package" className="open_buy_grp_btn open_btn gray_filter">
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item">Open Now</li>
                                            <li className="list-inline-item"><span>X 0</span></li>
                                        </ul>
                                    </Link>
                                    <Link to="/card_shop" className="open_buy_grp_btn buy_btn">
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item">Buy Now</li>
                                            <li className="list-inline-item"><span></span></li>
                                        </ul>
                                    </Link>
                                </div>
                                <div className="package_content">
                                    <p>When the cards in the starship belong to the camp, you can receive a total combat power bonus for <span>5% buff</span>.</p>
                                </div>
                                {/* <div className="package_note">
                                    <p>* When the cards in the starship belong to the camp, you can receive a total combat power bonus for 5% buff.</p>
                                </div> */}
                            </div>
                        </Col>
                        <Col xs="12" md="5">
                            <div className="instrelr_right">
                                <Image src={package_grey} fluid />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
};