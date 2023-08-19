

import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import endpoints from '../constants/endpoints';
// import Header from './Header';
import FallbackSpinner from './FallbackSpinner';
// import Footer from './Footer';
import '../css/education.css'; // Make sure to include the correct path to your CSS file

function Education(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.education, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      {/* Render the header */}
      {/* <Header title={header} /> */}

      <div className="section-content-container">
        {data ? (
          <Row className="card-container">
            {data.education.map((education) => (
              <Col key={education.title} xs={12} md={12} lg={8}>
                <Card className="card-styles">
                  <div className="card-image">
                    <Image src="images/ui1.jpg" alt="Website Logo" fluid className="img-style" />
                  </div>
                  <div className="card-text">
                    <Card.Title className="card-title-styles">{education.cardTitle}</Card.Title>
                    <Card.Subtitle className="card-subtitle-styles mb-2 text-muted">
                      {education.cardSubtitle}
                    </Card.Subtitle>
                    <Card.Text className="card-text-styles">{education.title}</Card.Text>
                    <Card.Text className="card-text-styles">{education.status}</Card.Text>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          // Render a fallback spinner while data is being fetched
          <FallbackSpinner />
        )}
      </div>

      {/* <Footer /> */}
    </>
  );
}


export default Education;
