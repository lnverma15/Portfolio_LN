import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/education.css'; // Make sure to include the correct path to your CSS file

function Experiences(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.experiences, {
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
      <br /><br />
      <center>
        <h3>
          Experience
        </h3>
      </center>
      <br /><br />

      <div className="section-content-container">
        {data ? (
          <Row className="card-container">
            {data.experiences.map((experience) => (
              <Col key={experience.title} xs={12} md={6} lg={11}>
                <Card className="card-styles">
                  <div className="card-image">
                    <Image src="images/ui2.jpg" alt="Website Logo" fluid className="img-style" />
                  </div>
                  <div className="card-text">
                    <Card.Title className="card-title-styles">{experience.title}</Card.Title>
                    <br />
                    <Card.Subtitle className="card-title-styles">
                      {experience.subtitle}
                    </Card.Subtitle>
                    <Card.Text className="card-text-styles">{experience.workType}</Card.Text>
                    <Card.Text className="card-text-styles">{experience.workDescription}</Card.Text>
                    <Card.Text className="card-text-styles">{experience.dateText}</Card.Text>
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

// Type checking for the 'header' prop
// Experiences.propTypes = {
//   header: PropTypes.string.isRequired,
// };

export default Experiences;

