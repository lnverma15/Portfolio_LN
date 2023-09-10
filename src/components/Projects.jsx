
import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components'; // Make sure to import ThemeContext
import ProjectCard from './projects/ProjectCard';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  containerStyle: {
    marginBottom: 25,
    // backgroundColor: 'white'
  },
  showMoreStyle: {
    margin: 25,
  },
};

const Projects = (props) => {
  const { header } = props;
  // const { cardBackground } = useContext(ThemeContext); // Use ThemeContext for styling
  const [data, setData] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch(endpoints.projects, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  const numberOfItems = showMore && data ? data.projects.length : 6;

  return (
    <div className="section-content-container">
      <br /><br /><br />
      <div>
        <center>
          <h3>Projects</h3>
        </center>
      </div>
      <br /><br /><br />

      <Container style={{ ...styles.containerStyle, backgroundColor: 'white' }}>
        <Row xs={1} sm={1} md={2} lg={3} className="g-4">
          {data && data.projects?.slice(0, numberOfItems).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </Row>

        {/* {!showMore && (
          <Button
            style={{ ...styles.showMoreStyle, backgroundColor: cardBackground }}
            onClick={() => setShowMore(true)}
          >
            Show more
          </Button>
        )} */}
      </Container>

    </div>
  );
};

Projects.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Projects;
