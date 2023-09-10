import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ThemeToggler from './ThemeToggler';
import { NavLink } from 'react-router-dom';

const styles = {
  logoStyle: {
    width: 50,
    height: 40,
  },
};

const ExternalNavLink = styled.a`
  /* Custom link color */
  color: #dedede; /* Replace with your desired link color */
  &:hover {
    /* Custom link hover color */
    color: #fefefe; /* Replace with your desired hover color */
  }
  &::after {
    /* Custom background color */
    background-color: #e67e22; /* Replace with your desired background color */
  }
`;

const InternalNavLink = styled(Nav.Link)`
  /* Custom link color */
  color: #dedede; /* Replace with your desired link color */
  &:hover {
    /* Custom link hover color */
    color: #00d4ff;
    /* color: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,23,1) 35%, rgba(0,212,255,1) 100%);; Replace with your desired hover color */
  }
  &::after {
    /* Custom background color */
    background-color: #e67e22; /* Replace with your desired background color */
  }
  &.active {
    /* Custom active link color */
    color: #6fdff6;
    
  }

  /* Add margin or padding here */
  margin-right: 30px; /* Adjust the value as needed */
`;

const Header = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  // const [darkMode, setDarkMode] = useState(true);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const element = document.getElementById(tab);
    element.scrollIntoView({ behavior: 'smooth' });
  };



  useEffect(() => {
    // Add event listeners to track network changes
    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);

    return () => {
      // Clean up event listeners on component unmount
      window.removeEventListener('online', handleNetworkChange);
      window.removeEventListener('offline', handleNetworkChange);
    };
  }, []);

  const handleNetworkChange = () => {
    setIsOnline(window.navigator.onLine);
    const statusMessage = window.navigator.onLine ? 'Online' : 'Offline';
    toast.info(`You are now ${statusMessage}`);
  };
  return (
    <div className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <ToastContainer style={{ marginTop: '30px' }} position="top-center" />

      <Navbar
        fixed="top"
        expand="md"
        bg="dark"
        variant="dark"
        className="navbar-custom"
        expanded={isMenuOpen}
      >
        <Container>
          {/* Your logo code */}
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleMenuToggle}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <InternalNavLink
                as={NavLink}
                to="/"
                activeClassName="active"
                onClick={() => handleTabClick('home')}
              >
                Home
              </InternalNavLink>

              <InternalNavLink
                as={NavLink}
                to="/about"
                activeClassName="active"
                onClick={() => handleTabClick('about')}
              >
                About
              </InternalNavLink>
              <InternalNavLink
                as={NavLink}
                to="/experiences"
                activeClassName="active"
                onClick={() => handleTabClick('experiences')}
              >
                Experiences
              </InternalNavLink>
              <InternalNavLink
                as={NavLink}
                to="/skills"
                activeClassName="active"
                onClick={() => handleTabClick('skills')}
              >
                Skills
              </InternalNavLink>
              <InternalNavLink
                as={NavLink}
                to="/projects"
                activeClassName="active"
                onClick={() => handleTabClick('projects')}
              >
                Projects
              </InternalNavLink>
              <InternalNavLink
                as={NavLink}
                to="/education"
                activeClassName="active"
                onClick={() => handleTabClick('education')}
              >
                Education
              </InternalNavLink>
              <InternalNavLink
                as={NavLink}
                to="/contactus"
                activeClassName="active"
                onClick={() => handleTabClick('contactus')}
              >
                ContactUs
              </InternalNavLink>
              {/* Add similar NavLink components for other sections */}
            </Nav>

            {/* <ThemeToggler
              onClick={handleMenuToggle}
              toggleDarkMode={toggleDarkMode}
              darkModeValue={darkMode}
            /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

Header.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default Header;
