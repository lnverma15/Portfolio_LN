

import React, { useState, useEffect, useRef } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { useLocation } from 'react-router-dom'; // Import useLocation
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Header from './components/Header';
import ProjectCard from './components/projects/ProjectCard';
import Skills from './components/Skills';
import ContactUs from './components/ContactUs';
import NavBar from './components/NavBar'; // Update the import path for NavBar
import endpoints from './constants/endpoints';
import Projects from './components/Projects';

function MainApp() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(endpoints.routes, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => err);

        window.addEventListener('online', handleNetworkChange);
        window.addEventListener('offline', handleNetworkChange);

        return () => {
            window.removeEventListener('online', handleNetworkChange);
            window.removeEventListener('offline', handleNetworkChange);
        };
    }, []);

    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleNetworkChange = () => {
        setIsOnline(window.navigator.onLine);
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const location = useLocation(); // Get the current location

    useEffect(() => {
        const path = location.pathname;
        const activeTab = path === '/' ? 'home' : path.substring(1);
        setActiveTab(activeTab);
    }, [location]); // Listen for changes in location

    const [activeTab, setActiveTab] = useState('home'); // Initialize activeTab here

    const homeRef = useRef(null);

    const scrollToHome = () => {
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToHome();
    }, []);

    return (
        <div className={`main-container ${isMenuOpen ? 'menu-open' : ''}`}>
            {/* Your NavBar component */}
            <Header activeTab={activeTab} setActiveTab={handleTabClick} />

            <div id="home" ref={homeRef}>
                <Home />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="education">
                <Education />
            </div>
            <div id="experiences">
                <Experiences />
            </div>
            <div id="projects">
                <Projects data={data?.projects} />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="contactus">
                <ContactUs />
            </div>
        </div>
    );
}

export default MainApp;


