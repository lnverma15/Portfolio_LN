
import React, { useEffect, useState, useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled, { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';
import ThemeToggler from './ThemeToggler';
import { NavLink } from 'react-router-dom';

const styles = {
  logoStyle: {
    width: 50,
    height: 40,
  },
};

const ExternalNavLink = styled.a`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

const InternalNavLink = styled(Nav.Link)` /* Use styled(Nav.Link) here */
  color: ${(props) => props.theme.navbarTheme.linkColor};
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
  &.active {
    color: ${(props) => props.theme.navbarTheme.linkActiveColor}; /* Use .active here */
  }
`;

const NavBar = ({ toggleDarkMode, darkModeValue }) => {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch(endpoints.navbar, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <Navbar
      fixed="top"
      expand="md"
      bg="dark"
      variant="dark"
      className="navbar-custom"
      expanded={expanded}
    >
      <Container>
        {/* Your logo code */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />



          <ThemeToggler
            onClick={() => setExpanded(false)}
            toggleDarkMode={toggleDarkMode}
            darkModeValue={darkModeValue}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;






// <Nav>
// {data &&
//   data.sections?.map((section, index) =>
//     section?.type === 'link' ? (
//       <ExternalNavLink
//         key={section.title}
//         href={section.href}
//         target="_blank"
//         rel="noopener noreferrer"
//         onClick={() => setExpanded(false)}
//         className="navbar__link"
//         theme={theme}
//       >
//         {section.title}
//       </ExternalNavLink>
//     ) : (
//       <InternalNavLink
//         key={section.title}
//         onClick={() => setExpanded(false)}
//         as={NavLink} /* Use as={NavLink} to use styled Nav.Link as NavLink */
//         activeClassName="active" /* Use activeClassName to indicate active link */
//         exact={index === 0}
//         className="navbar__link"
//         to={section.href}
//         theme={theme}
//       >
//         {section.title}
//       </InternalNavLink>
//     )
//   )}
// </Nav>
