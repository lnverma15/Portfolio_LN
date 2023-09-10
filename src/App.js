
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import MainApp from './MainApp';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <MainApp />
          <Footer />
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;




