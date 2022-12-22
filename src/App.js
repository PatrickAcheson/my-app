import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import bightness from './brightness.png';
import earth from './planet.png';
import ScrollingSection from './components/ScrollingSection';

function App() {
  const [dark, setDark] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = dark ? 'white' : 'black';
    canvas.style.backgroundColor = dark ? 'black' : 'white';

    const stars = [];
    const numStars = 500;
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.x += star.vx / 50;
        star.y += star.vy / 50;

        if (star.x < 0 || star.x > width) {
          star.vx = -star.vx;
        }

        if (star.y < 0 || star.y > height) {
          star.vy = -star.vy;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, [dark]);

  return (
    <div className="App">
      <header className="App-header">
        <h2 className={dark ? 'dark-sig' : 'sig'}>PA</h2>
        <h1 className={dark ? 'dark-title' : 'title'}>Hi, I'm Patrick. I design and build user interfaces.</h1>
        <button className="toggle-button" onClick={() => setDark(!dark)}>
          <img src={bightness} alt="img" />
        </button>
        <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>
        <nav className={dark ? 'dark-nav' : 'nav'}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
        <img src={earth} alt="img" className="earth"/>
        <div>
          <ScrollingSection />
        </div>
      </header>
    </div>
  );
}

export default App;