import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Extra, Contact, Projects, Feedbacks, Hero, Navbar, Tech, Experience, ComputersCanvas, StarsCanvas } from './components';

const App = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const dotSize = 25; // Set the size of the dot
    const dotStyle = {
        position: 'fixed',
        left: `${mousePosition.x - dotSize / 2}px`, // Center the dot horizontally
        top: `${mousePosition.y - dotSize / 2}px`, // Center the dot vertically
        width: `${dotSize}px`,
        height: `${dotSize}px`,
        backgroundColor: 'rgba(0, 0, 255, 0.5)', // Light blue color with transparency
        borderRadius: '50%',
        zIndex: '9999',
        pointerEvents: 'none', // Ensures the dot does not interfere with mouse events
        boxShadow: '0 0 10px rgba(0, 0, 255, 0.5)', // Blue shadow effect
    };

    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Experience />
                <Projects />
                <Tech />
                <Extra />
                <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div>
                {/* Blue shadow dot */}
                <div style={dotStyle}></div>
            </div>
        </BrowserRouter>
    );
};

export default App;
