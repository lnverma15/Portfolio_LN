// import React from 'react';
// import DarkModeToggle from 'react-dark-mode-toggle';
// import PropTypes from 'prop-types';
// import AppContext from '../AppContext';

// function ThemeToggler(props) {
//   const { onClick } = props;
//   const handleOnChange = (darkMode) => {
//     darkMode.toggle();
//     onClick();
//   };

//   return (
//     <>
//       <AppContext.Consumer>
//         {(values) => (
//           <div style={{ marginBottom: 8 }}>
//             <DarkModeToggle
//               onChange={() => handleOnChange(values.darkMode)}
//               checked={values.darkMode.value}
//               size={50}
//             />
//           </div>
//         )}
//       </AppContext.Consumer>
//     </>
//   );
// }

// ThemeToggler.propTypes = {
//   onClick: PropTypes.func,
// };
// ThemeToggler.defaultProps = {
//   onClick: () => {},
// };

// export default ThemeToggler;



import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import PropTypes from 'prop-types';

function ThemeToggler(props) {
  const { onClick, darkModeValue, toggleDarkMode } = props;

  const handleOnChange = () => {
    toggleDarkMode();
    onClick();
  };

  return (
    <div style={{ marginBottom: 8 }}>
      <DarkModeToggle
        onChange={handleOnChange}
        checked={darkModeValue}
        size={50}
      />
    </div>
  );
}

ThemeToggler.propTypes = {
  onClick: PropTypes.func,
  darkModeValue: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

ThemeToggler.defaultProps = {
  onClick: () => { },
};

export default ThemeToggler;
