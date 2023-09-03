


import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
// import { Link } from 'react-router-dom/cjs/react-router-dom';
import { Link } from 'react-router-dom';

import {
    FaEnvelope,
    FaPhone,
    FaMapMarker,
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';

const mapContainerStyle = {
    width: '100%',
    height: '400px',
};

const footerStyle = {
    backgroundColor: 'black',
    width: '100%',
    padding: '20px',
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
};

const linkHoverStyle = {
    color: '#ff0000',
};

const iconStyle = {
    color: 'white',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    marginRight: '25px',
};

const iconHoverStyle = {
    color: 'coral',
};

const center = {
    lat: 12.9716,
    lng: 77.5946,
};

const Marker = () => (
    <div style={{ color: 'red', fontWeight: 'bold', fontSize: '16px' }}>Marker</div>
);

const Footer = () => {

    return (
        <>
            {/* <Container> */}
            <footer style={footerStyle}>
                <Row>
                    <Col md={6} lg={3}>
                        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <div style={{ color: 'white' }}>
                                <b>
                                    Lnverma Profile
                                </b>
                            </div>
                            <br />
                            <div style={{ color: 'white' }}>
                                <p style={{ textAlign: 'left' }}>
                                    Connect with me and let's build amazing things together. Whether you have an exciting project idea,
                                    a collaboration opportunity, or just want to say hello, feel free to get in touch!
                                </p>

                            </div>
                        </Container>
                    </Col>
                    <Col md={6} lg={3}>
                        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <div style={{ color: 'white' }}>
                                <b>
                                    Contact Info
                                </b>
                            </div>
                            <br />
                            <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                                <FaPhone size={24} style={{ ...iconStyle, marginRight: '25px' }} /> 9129570336
                            </div>
                            <br />
                            <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                                <FaEnvelope size={24} style={{ ...iconStyle, marginRight: '25px' }} /> lnverma95@gmail.com
                            </div>
                            <br />
                            <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                                <FaMapMarker size={24} style={{ ...iconStyle, marginRight: '25px' }} /> Lucknow U.P. India
                            </div>
                        </Container>
                    </Col>

                    {/* <Col md={6} lg={3} >
                        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <div style={{ color: 'white' }}>
                                <b>
                                    Quick Links
                                </b>
                            </div>
                            <br />
                            <div>
                                <Link style={{ ...linkStyle }} to="/" className="footer-link">
                                    Home
                                </Link>
                            </div>
                            <div>
                                <Link style={{ ...linkStyle }} to="/about" className="footer-link">
                                    About
                                </Link>
                            </div>
                            <div>
                                <Link style={{ ...linkStyle }} to="/skills" className="footer-link">
                                    Skills
                                </Link>
                            </div>
                            <div>
                                <Link style={{ ...linkStyle }} to="/experience" className="footer-link">
                                    Experience
                                </Link>
                            </div>
                            <div>
                                <Link style={{ ...linkStyle }} to="/education" className="footer-link">
                                    Education
                                </Link>
                            </div>
                        </Container>
                    </Col> */}




                    <Col md={6} lg={3} className="mt-5 mt-md-0">
                        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <div style={{ color: 'white' }}>
                                <b>Quick Links</b>
                            </div>
                            <br />
                            <div>
                                <Link style={{ ...linkStyle }} to="/" className="footer-link">
                                    Home
                                </Link>
                            </div>
                            <div>
                                <Link style={{ ...linkStyle }} to="/about" className="footer-link">
                                    About
                                </Link>
                            </div>
                            <div>
                                <Link style={{ ...linkStyle }} to="/skills" className="footer-link">
                                    Skills
                                </Link>
                            </div>
                            <div>
                                <Link style={{ ...linkStyle }} to="/experience" className="footer-link">
                                    Experience
                                </Link>
                            </div>
                            <div>
                                <Link style={{ ...linkStyle }} to="/education" className="footer-link">
                                    Education
                                </Link>
                            </div>
                        </Container>
                    </Col>


                    <Col md={6} lg={3} className="mt-5 mt-md-0">
                        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <div style={{ color: 'white' }}>
                                <b>
                                    Social Links
                                </b>
                            </div>
                            <br />
                            <br />
                            <div>
                                <FaEnvelope size={30} style={{ ...iconStyle }} className="footer-icon" /> <FaLinkedin size={30} style={{ ...iconStyle }} className="footer-icon" /> <FaInstagram size={30} style={{ ...iconStyle }} className="footer-icon" /> <FaTwitter size={30} style={{ ...iconStyle }} className="footer-icon" />
                                {/* <FaFacebook size={30} style={{ ...iconStyle }} className="footer-icon" /> */}

                            </div>
                        </Container>
                    </Col>
                </Row>
                <br /><br />
                <center>


                    <div style={{ color: 'white' }}>
                        <p>© {new Date().getFullYear()} All rights reserved.</p>
                        <i>
                            <h6>**Created by @LNVERMA**</h6>
                        </i>

                    </div>
                    {/* <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                        <p style={{ margin: '40px' }}>© {new Date().getFullYear()} All rights reserved.</p>
                        <i style={{ marginLeft: '60px' }}>**Created by @LNVERMA**</i>
                    </div> */}

                </center>
            </footer>
            {/* </Container> */}
        </>
    );
};

export default Footer;
