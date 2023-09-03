import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
// import Footer from './Footer';
import ContactUs from './ContactUs';

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

  },
};

function About(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  const parseIntro = (text) => (
    <ReactMarkdown
      children={text}
    />
  );

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      {/* <Header title={header} /> */}
      {/* <ContactUs title={ContactUs}></ContactUs> */}

      <div className="section-content-container">
        <Container>
          {data ? (
            <Row>
              <Col style={styles.introTextContainer}>
                <img src={data?.imageSource1} alt="ui2" />

                {parseIntro(data.about)}
              </Col>
              <Col style={styles.introImageContainer}>
                <img src={data?.imageSource} alt="Man_simple" />
                {/* <img src={data?.imageSource} alt="profile" /> */}
              </Col>
            </Row>
          ) : (
            <FallbackSpinner />
          )}
        </Container>
      </div>
      <br />
      {/* <hr /> */}
      {/* <Footer title={Footer} /> */}
    </>
  );
}

// About.propTypes = {
//   header: PropTypes.string.isRequired,
// };

export default About;
