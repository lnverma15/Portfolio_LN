
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import '../css/home.css';


// Define keyframes for animation
const slideBackground = {
  '0%': { backgroundPosition: '0 0' },
  '100%': { backgroundPosition: '100% 0' },
};

// Define keyframes for floating color animation
const floatColor = {
  '0%': { color: 'blue', transform: 'translateY(0)' },
  '50%': { color: 'red', transform: 'translateY(-10px)' },
  '100%': { color: 'blue', transform: 'translateY(0)' },
};


const styles = {
  container: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    overflow: 'hidden',
  },


  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // backgroundImage: `url("images/graphic.jpg")`, // Replace with your image path
    backgroundImage: `url("images/lapp.jpg")`, // Replace with your image path
    backgroundSize: 'cover',
    // opacity: 0.8,
    zIndex: -1,
    animationName: slideBackground, // Apply the animation keyframes
    animationDuration: '2s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },

  floatingText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // Center the text
    animationName: floatColor, // Apply the floating color animation keyframes
    animationDuration: '1s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
    fontSize: '24px', // Adjust text size as needed
    fontWeight: 'bold', // Adjust text weight as needed
    margin: 0,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  nameStyle: {
    fontSize: '1.5em',
    fontStyle: 'italic',
  },
  inlineChild: {
    display: 'inline-block',
    fontSize: '1em',
    fontStyle: 'italic',
  },
  phoneContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    'images/cherry tree-amico.svg',
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpg',
    'images/11.jpg',
    'images/12.jpg',
  ];

  return (
    <div style={styles.container}>
      {/* <div style={styles.backgroundImage}></div> */}
      <div style={styles.content}>
        {data ? (
          window.innerWidth < 576 ? (
            // Content for phone screens
            <div style={styles.phoneContent}>
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
                      <h5 style={styles.nameStyle}>{data?.greetings}</h5>
                      <h2 style={styles.nameStyle}>{data?.name}</h2>
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
                <Col md={6} lg={6} className="image-col" style={{ marginTop: '100px' }}>
                  <Carousel className="contact-carousel">
                    {images.map((image, index) => (
                      <Carousel.Item key={index}>
                        <img src={image} alt={`Carousel ${index}`} className="contact-image" />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Col>
              </Row>
            </Container>
          )
        ) : (
          // Display spinner while fetching data
          <FallbackSpinner />
        )}
      </div>
    </div>
  );
}

export default Home;
