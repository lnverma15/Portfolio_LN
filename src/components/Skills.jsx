import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/skills.css';

const styles = {
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: 250,
    height: 250,
    margin: 10,
    padding: 10,
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
    backgroundColor: 'transparent', // Set initial background to transparent
  },
  iconStyle: {
    height: 75,
    width: 75,
    margin: '0 auto',
  },
  title: {
    margin: '10px 0',
    fontWeight: 'bold',
  },
  ratingScale: {
    display: 'flex',
    justifyContent: 'center',
  },
  ratingItem: {
    width: 20,
    height: 20,
    margin: '0 2px',
    borderRadius: '50%',
  },
  checkedRatingItem: {
    background: 'gold',
  },
};

function Skills(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  const renderSkillsIntro = (intro) => (
    <h4 style={styles.introTextContainer}>
      <ReactMarkdown children={intro} />
    </h4>
  );

  useEffect(() => {
    fetch(endpoints.skills, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  const renderRatingScale = (rating) => {
    const filledStars = Math.floor(rating / 2);
    const halfStar = rating % 2 === 1;

    const starColors = [
      'rgba(51, 156, 255, 0.7)',
      'rgba(11, 72, 162, 0.7)',
      'rgba(51, 156, 255, 0.5)',
      'rgba(11, 72, 162, 0.5)',
      'rgba(51, 156, 255, 0.3)',
    ];

    const stars = [];
    for (let i = 0; i < 5; i += 1) {
      const starColor = i < filledStars ? starColors[i] : '#ccc';

      if (i < filledStars) {
        stars.push(
          <div
            key={i}
            style={{ ...styles.ratingItem, ...styles.checkedRatingItem, backgroundColor: starColor }}
          />
        );
      } else if (halfStar && i === filledStars) {
        stars.push(
          <div
            key={i}
            style={{
              ...styles.ratingItem,
              background: `linear-gradient(to right, ${starColor} 50%, #ccc 50%)`,
            }}
          />
        );
      } else {
        stars.push(
          <div
            key={i}
            style={{ ...styles.ratingItem, backgroundColor: starColor }}
          />
        );
      }
    }

    return <div style={styles.ratingScale}>{stars}</div>;
  };

  const renderSkillCards = (skills) => (
    <div style={styles.cardContainer}>
      {skills.map((item) => (
        <div
          key={item.title}
          style={{
            ...styles.card,
            transform: item.isHovered ? 'translateY(-10px)' : 'translateY(0)',
            boxShadow: item.isHovered
              ? '0 8px 12px rgba(16, 190, 51, 0.1)'
              : 'none',
            backgroundColor: item.isHovered ? 'rgba(77, 242, 237, 0.8)' : 'transparent',
          }}
          onMouseEnter={() => {
            item.isHovered = true;
            setData({ ...data }); // Trigger a re-render to update the styles
          }}
          onMouseLeave={() => {
            item.isHovered = false;
            setData({ ...data }); // Trigger a re-render to update the styles
          }}
        >
          <img style={styles.iconStyle} src={item.icon} alt={item.title} />
          <h5 style={styles.title}>{item.title}</h5>
          {renderRatingScale(item.rating)}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Your Header component */}
      {data ? (
        <div className="section-content-container">
          <br />
          <br />
          <br />
          <Container>
            {renderSkillsIntro(data.intro)}
            {data.skills?.map((category) => (
              <div key={category.title}>
                <br />
                <center>
                  <h3>{category.title}</h3>
                </center>
                <br /><br /><br />
                <Row>
                  <Col>
                    {renderSkillCards(category.items)}
                  </Col>
                </Row>
              </div>
            ))}
          </Container>
        </div>
      ) : <FallbackSpinner />}
      <br /><br /><br /><br /><br />
    </>
  );
}

Skills.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Skills;
