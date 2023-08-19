// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// // import Header from './Header';
// import Header from './components/Header';
// import MainApp from './MainApp'; // Import your MainApp component
// import Footer from './components/Footer';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <MainApp />
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const darkMode = useDarkMode(true);

  return (
    <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="App">
        <BrowserRouter>
          {/* <Header /> */}
          <MainApp />
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
