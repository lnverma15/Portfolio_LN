
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Carousel } from 'react-bootstrap';

import Typewriter from 'typewriter-effect';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
// import Footer from './Footer';
// import Header from './Header';
import '../css/home.css';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  nameStyle: {
    fontSize: '2em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  imageStyle: {
    maxWidth: '100%',
    height: '400px',
  },
  phoneContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  phoneImageStyle: {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
  },
};





function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);



  const images = [
    'images/fox family-pana.svg',
    'images/avocado tree-cuate.svg',
    'images/cherry blossom-bro.svg',
    'images/cherry tree-amico.svg',
    'images/cherry tree-cuate.svg',
    'images/cherry tree-rafiki.svg',

  ];

  return (
    <div style={styles.container}>
      {data ? (
        <div style={styles.content}>
          {window.innerWidth < 576 ? (
            // Content for phone screens
            <div style={styles.phoneContent}>
              <div>
                <img
                  src="images/home.jpg"
                  alt="Website Logo"
                  style={styles.phoneImageStyle}
                />
              </div>
              <div>
                <h1 style={styles.nameStyle}>{data?.greetings}</h1>
                <h1 style={styles.nameStyle}>{data?.name}</h1>
                <div style={{ flexDirection: 'row' }}>
                  <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
                  <Typewriter
                    options={{
                      loop: true,
                      autoStart: true,
                      strings: data?.roles,
                    }}
                  />
                </div>
                <Social />
              </div>
            </div>
          ) : (
            // Content for larger screens
            <Container>

              <Row>
                <Col md={6} lg={6}>
                  <Row style={{ marginTop: '130px' }}>
                    <div>

                      <h1 style={styles.nameStyle}>{data?.greetings}</h1>
                      <h1 style={styles.nameStyle}>{data?.name}</h1>
                      <div style={{ flexDirection: 'row' }}>
                        <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
                        <Typewriter
                          options={{
                            loop: true,
                            autoStart: true,
                            strings: data?.roles,
                          }}
                        />
                      </div>
                      <br />
                      <br />
                      <br />
                      <Social />
                    </div>
                  </Row>
                </Col>
                <Col md={6} lg={6} className="image-col">
                  {/* <img
                    src="images/fox family-pana.svg"
                    // src="images/home.jpg"
                    alt="Website Logo"
                    style={styles.imageStyle}
                  /> */}

                  <Carousel className="contact-carousel">
                    {images.map((image, index) => (
                      <Carousel.Item key={index}>
                        <img src={image} alt={`Carousel ${index}`} className="contact-image" />
                      </Carousel.Item>
                    ))}
                  </Carousel>



                </Col>
              </Row>
              <br />
              <br />
              <br />
              <br />
              <br />
              {/* Add more content rows here */}
            </Container>
          )}
        </div>
      ) : (
        // Display spinner while fetching data
        <FallbackSpinner />
      )}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
