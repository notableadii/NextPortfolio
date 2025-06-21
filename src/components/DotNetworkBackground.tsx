"use client";
import React, { useEffect, useRef } from "react";

const DotNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const dotsRef = useRef<any[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  // =====================================
  // RESPONSIVE CONFIGURATION 👇
  // =====================================
  const getResponsiveConfig = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const area = width * height;
    const isMobile = width < 768;
    const isTablet = width < 1024 && width >= 768;
    const isSmallScreen = width < 1200;

    // Base configuration for desktop
    let config = {
      // Network Density & Size
      dotCount: 150,
      dotSize: 1,

      // Line Properties
      lineThickness: 0.8,
      connectionDistance: 200,

      // Mouse Interaction
      mouseInfluence: 150,
      mouseConnectionOpacity: 0.6,

      // Movement & Animation
      baseSpeed: 0.3,
      mouseAttraction: 0.08,
      returnToOriginal: 0.015,

      // Visual Appearance
      dotOpacity: 0.4,
      lineOpacity: 0.4,

      // Colors
      dotColor: "rgba(255, 255, 255",
      lineColor: "rgba(255, 255, 255",
      mouseLineColor: "rgba(98, 225, 159",

      // Performance
      enableMouseConnections: true,
      enableDotConnections: true,
    };

    // Mobile adjustments (screens < 768px)
    if (isMobile) {
      config = {
        ...config,
        dotCount: Math.max(100, Math.floor(area / 15000)), // Much fewer dots
        dotSize: 0.8, // Smaller dots
        lineThickness: 0.5, // Thinner lines
        connectionDistance: 120, // Shorter connections
        mouseInfluence: 100, // Reduced mouse influence
        mouseConnectionOpacity: 0.3, // More subtle mouse connections
        baseSpeed: 0.2, // Slower movement
        mouseAttraction: 0.05, // Less mouse attraction
        dotOpacity: 0.3, // More subtle dots
        lineOpacity: 0.25, // More subtle lines
        enableMouseConnections: false, // Disable mouse connections on mobile for performance
      };
    }
    // Tablet adjustments (screens 768px - 1024px)
    else if (isTablet) {
      config = {
        ...config,
        dotCount: Math.max(60, Math.floor(area / 12000)), // Moderate dot count
        dotSize: 0.9,
        lineThickness: 0.6,
        connectionDistance: 160,
        mouseInfluence: 120,
        mouseConnectionOpacity: 0.4,
        baseSpeed: 0.25,
        dotOpacity: 0.35,
        lineOpacity: 0.3,
      };
    }
    // Small desktop/laptop adjustments (screens 1024px - 1200px)
    else if (isSmallScreen) {
      config = {
        ...config,
        dotCount: Math.max(80, Math.floor(area / 10000)), // Slightly fewer dots
        connectionDistance: 180,
        mouseInfluence: 130,
        dotOpacity: 0.37,
        lineOpacity: 0.35,
      };
    }
    // Large screens get the full experience
    else {
      config = {
        ...config,
        dotCount: Math.min(150, Math.floor(area / 8000)), // Scale with screen size
      };
    }

    return config;
  };
  // =====================================
  // END OF RESPONSIVE CONFIGURATION 👆
  // =====================================

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let CONFIG = getResponsiveConfig();

    // Initialize dots with random positions and velocities
    const initDots = () => {
      dotsRef.current = [];
      for (let i = 0; i < CONFIG.dotCount; i++) {
        dotsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * CONFIG.baseSpeed,
          vy: (Math.random() - 0.5) * CONFIG.baseSpeed,
          originalVx: (Math.random() - 0.5) * CONFIG.baseSpeed,
          originalVy: (Math.random() - 0.5) * CONFIG.baseSpeed,
        });
      }
    };

    // Set canvas size to full window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Recalculate config on resize
      CONFIG = getResponsiveConfig();

      // Reinitialize dots with new config
      initDots();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    initDots();

    // Track mouse movement on document instead of canvas
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    // Track mouse leaving the window
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }; // Move mouse off-screen
    };

    // Add event listeners to document instead of canvas
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dots = dotsRef.current;
      const mouse = mouseRef.current;

      // Update and draw each dot
      dots.forEach((dot, i) => {
        // Calculate mouse influence
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Apply mouse attraction if within influence range
        if (distance < CONFIG.mouseInfluence && distance > 0) {
          const force =
            (CONFIG.mouseInfluence - distance) / CONFIG.mouseInfluence;
          dot.vx += (dx / distance) * force * CONFIG.mouseAttraction;
          dot.vy += (dy / distance) * force * CONFIG.mouseAttraction;
        } else {
          // Gradually return to original velocity when not influenced by mouse
          dot.vx += (dot.originalVx - dot.vx) * CONFIG.returnToOriginal;
          dot.vy += (dot.originalVy - dot.vy) * CONFIG.returnToOriginal;
        }

        // Update dot position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off screen edges
        if (dot.x < 0 || dot.x > canvas.width) {
          dot.vx *= -1;
          dot.originalVx *= -1;
          dot.x = Math.max(0, Math.min(canvas.width, dot.x));
        }
        if (dot.y < 0 || dot.y > canvas.height) {
          dot.vy *= -1;
          dot.originalVy *= -1;
          dot.y = Math.max(0, Math.min(canvas.height, dot.y));
        }

        // Draw the dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, CONFIG.dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `${CONFIG.dotColor}, ${CONFIG.dotOpacity})`;
        ctx.fill();

        // Draw connections between dots
        if (CONFIG.enableDotConnections) {
          for (let j = i + 1; j < dots.length; j++) {
            const dx = dots[j].x - dot.x;
            const dy = dots[j].y - dot.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < CONFIG.connectionDistance) {
              const opacity =
                (1 - distance / CONFIG.connectionDistance) * CONFIG.lineOpacity;
              ctx.beginPath();
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(dots[j].x, dots[j].y);
              ctx.strokeStyle = `${CONFIG.lineColor}, ${opacity})`;
              ctx.lineWidth = CONFIG.lineThickness;
              ctx.stroke();
            }
          }
        }

        // Draw connection from mouse to nearby dots
        if (CONFIG.enableMouseConnections) {
          const mouseDx = mouse.x - dot.x;
          const mouseDy = mouse.y - dot.y;
          const mouseDistance = Math.sqrt(
            mouseDx * mouseDx + mouseDy * mouseDy
          );

          if (mouseDistance < CONFIG.mouseInfluence && mouseDistance > 0) {
            const opacity =
              (1 - mouseDistance / CONFIG.mouseInfluence) *
              CONFIG.mouseConnectionOpacity;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `${CONFIG.mouseLineColor}, ${opacity})`;
            ctx.lineWidth = CONFIG.lineThickness;
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []); // Empty dependency array

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, // Behind all content
        pointerEvents: "none", // Allow clicks to pass through
      }}
    />
  );
};

export default DotNetworkBackground;
