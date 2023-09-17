


import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
// import { Link } from 'react-router-dom/cjs/react-router-dom';
import { Link } from 'react-router-dom';
import Social from './Social';


import {
    FaEnvelope,
    FaPhone,
    FaMapMarker,
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaGithub,
    FaWhatsapp,
    FaYoutube,
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
                                <FaMapMarker size={24} style={{ ...iconStyle, marginRight: '25px' }} /> Prayagraj U.P. India
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


                                <div>
                                    <a href="mailto:lnverma95@gmail.com" className="footer-icon">
                                        <FaEnvelope size={30} style={{ ...iconStyle }} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/lnverma09/" className="footer-icon">
                                        <FaLinkedin size={30} style={{ ...iconStyle }} />
                                    </a>
                                    <a href="https://www.instagram.com/mr._.ln" className="footer-icon">
                                        <FaInstagram size={30} style={{ ...iconStyle }} />
                                    </a>
                                    <a href="https://www.x.com/Lnverma9977553" className="footer-icon">
                                        <FaTwitter size={30} style={{ ...iconStyle }} />
                                    </a>
                                    <a href="https://wa.me/9129570336" className="footer-icon">
                                        <FaWhatsapp size={30} style={{ ...iconStyle }} />
                                    </a>
                                    <br />
                                    <br />

                                    <a href="https://www.facebook.com/lakshminarayanverma.lnverma" className="footer-icon">
                                        <FaFacebook size={30} style={{ ...iconStyle }} />
                                    </a>
                                    <a href="https://github.com/lnverma15" className="footer-icon">
                                        <FaGithub size={30} style={{ ...iconStyle }} />
                                    </a>
                                    <a href="https://www.youtube.com/@lnverma6831" className="footer-icon">
                                        <FaYoutube size={30} style={{ ...iconStyle }} />
                                    </a>
                                </div>
                            </div>
                        </Container>
                    </Col>
                    {/* <Col>

                    </Col> */}
                    <Col>
                        <img
                            src="/Lnverma.gif"
                            alt="Lnverma Logo"
                            style={{ width: '200px', height: '200px', marginTop: '50px' }} // Adjust the values as needed
                        />
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


                </center>
            </footer>
            {/* </Container> */}
        </>
    );
};







export default Footer;
