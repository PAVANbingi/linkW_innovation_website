'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const amount = 20;
    const sineDots = Math.floor(amount * 0.3);
    const width = 26;
    const idleTimeout = 150;

    const dots: Dot[] = [];
    let timeoutID: ReturnType<typeof setTimeout>;
    let idle = false;
    const mousePosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    class Dot {
      index: number;
      x: number;
      y: number;
      scale: number;
      range: number;
      angleX: number;
      angleY: number;
      anglespeed: number;
      lockX?: number;
      lockY?: number;
      element: HTMLElement;

      constructor(index: number) {
        this.index = index;
        this.x = mousePosition.x;
        this.y = mousePosition.y;
        this.scale = 1 - 0.05 * index;
        this.range = width / 2 - (width / 2) * this.scale + 2;
        this.angleX = Math.PI * 2 * Math.random();
        this.angleY = Math.PI * 2 * Math.random();
        this.anglespeed = 0.05;
        this.element = document.createElement('span');
        gsap.set(this.element, { scale: this.scale });
        cursor?.appendChild(this.element);
      }

      lock() {
        this.lockX = this.x;
        this.lockY = this.y;
      }

      draw() {
        if (!idle || this.index <= sineDots) {
          gsap.to(this.element, { x: this.x, y: this.y, duration: 0.1 });
        } else {
          this.angleX += this.anglespeed;
          this.angleY += this.anglespeed;
          this.x = (this.lockX || 0) + Math.sin(this.angleX) * this.range;
          this.y = (this.lockY || 0) + Math.cos(this.angleY) * this.range;
          gsap.to(this.element, { x: this.x, y: this.y, duration: 0.1 });
        }
      }
    }

    const buildDots = () => {
      for (let i = 0; i < amount; i++) {
        const dot = new Dot(i);
        dots.push(dot);
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      mousePosition.x = event.clientX - width / 2;
      mousePosition.y = event.clientY - width / 2;
      resetIdleTimer();
    };

    const resetIdleTimer = () => {
      clearTimeout(timeoutID);
      idle = false;
      startIdleTimer();
    };

    const startIdleTimer = () => {
      timeoutID = setTimeout(() => {
        idle = true;
        dots.forEach((dot) => dot.lock());
      }, idleTimeout);
    };

    const positionCursor = () => {
      let x = mousePosition.x;
      let y = mousePosition.y;

      dots.forEach((dot, index, array) => {
        const nextDot = array[index + 1] || array[0];
        dot.x = x;
        dot.y = y;
        dot.draw();

        if (!idle || index <= sineDots) {
          const dx = (nextDot.x - dot.x) * 0.35;
          const dy = (nextDot.y - dot.y) * 0.35;
          x += dx;
          y += dy;
        }
      });
    };

    const render = () => {
      positionCursor();
      requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    buildDots();
    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (cursor) {
        cursor.innerHTML = ''; // Clean up the DOM
      }
    };
  }, []);

  return <div id="cursor" className="Cursor"></div>;
};

export default CustomCursor;
