import React, { useRef, useEffect, useState } from 'react';


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


export default background;