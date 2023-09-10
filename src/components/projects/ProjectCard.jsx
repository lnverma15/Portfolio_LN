
import React from 'react';
import { Button, Card, Badge, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const styles = {
  badgeStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
    // backgroundColor: 'grey'
  },
  cardStyle: {
    borderRadius: 10,
    // backgroundColor: 'white', // Replace with your color
    // borderColor: 'your-custom-card-border-color', // Replace with your color
  },
  cardTitleStyle: {
    fontSize: 24,
    fontWeight: 700,
  },
  cardTextStyle: {
    textAlign: 'left',
    color: 'black', // Replace with your text color
  },
  linkStyle: {
    textDecoration: 'black',
    padding: 10,
  },
  buttonStyle: {
    margin: 5,
  },
  cardFooterStyle: {
    backgroundColor: 'black'
  },
};

const ProjectCard = ({ project }) => {
  const parseBodyText = (text) => <ReactMarkdown children={text} />;

  return (
    <Col >
      <Card
        style={styles.cardStyle}
        text="black" // Replace with your text color

      >
        <Card.Img variant="top" src={project?.image} style={{ width: '100%', height: 'auto' }} />
        <Card.Body>
          <Card.Title style={styles.cardTitleStyle}>{project.title}</Card.Title>
          <Card.Text style={styles.cardTextStyle}>
            {parseBodyText(project.bodyText)}
          </Card.Text>
        </Card.Body>

        <Card.Body>
          {project?.links?.map((link) => (
            <Button
              key={link.href}
              style={styles.buttonStyle}
              variant="outline-secondary" // Customize the button variant as needed
              onClick={() => window.open(link.href, '_blank')}
            >
              {link.text}
            </Button>
          ))}
        </Card.Body>
        {project.tags && (
          <Card.Footer style={styles.cardFooterStyle}>
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                pill
                variant="primary" // Customize the badge variant as needed
                style={styles.badgeStyle}
              >
                {tag}
              </Badge>
            ))}
          </Card.Footer>
        )}
      </Card>
    </Col>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    image: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
