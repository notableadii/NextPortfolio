"use client"; // This is a client component which means it can use hooks and state
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./styles/page.module.css";
import Link from "next/link";
import MultilingualLoader from "../components/MultilingualLoader";
import Navigation from "../components/Navigation";
import TechStack from "../components/TechStack";
import { gsap } from "gsap";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Create refs for all animated elements
  const mainTextRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const scrollIconRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track if animations have been initialized
  const animationsInitialized = useRef(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Initialize GSAP animations when loading completes
  useEffect(() => {
    if (!isLoading && !animationsInitialized.current) {
      initializeAnimations();
      animationsInitialized.current = true;
    }
  }, [isLoading]);

  const initializeAnimations = () => {
    // Set initial states - elements start below and invisible
    gsap.set(
      [mainTextRef.current, descriptionRef.current, scrollIconRef.current],
      {
        opacity: 0,
        y: 80, // Start 80px below original position
        scale: 0.95, // Slightly smaller
        filter: "blur(8px)", // Add subtle blur for modern effect
      }
    );

    // Create the main timeline for sequential animations
    const mainTimeline = gsap.timeline({
      delay: 0.3, // Small delay after page load
      ease: "power3.out",
    });

    // Animate main heading - the hero moment
    mainTimeline
      .to(mainTextRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.4,
        ease: "power4.out",
        // Add a subtle bounce at the end
        onComplete: () => {
          gsap.to(mainTextRef.current, {
            scale: 1.02,
            duration: 0.15,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut",
          });
        },
      })

      // Animate description text - smoother, softer entrance
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.8"
      ) // Start 0.8 seconds before previous animation ends

      // Animate scroll icon - bouncy, playful entrance
      .to(
        scrollIconRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "back.out(1.4)", // Bouncy effect
        },
        "-=0.6"
      )

      // Add a subtle floating animation to the scroll icon
      .to(scrollIconRef.current, {
        y: -8,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });

    // Add hover animations for interactive elements
    setupHoverAnimations();
  };

  const setupHoverAnimations = () => {
    // Main text hover effect
    if (mainTextRef.current) {
      const mainText = mainTextRef.current;

      mainText.addEventListener("mouseenter", () => {
        gsap.to(mainText, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      mainText.addEventListener("mouseleave", () => {
        gsap.to(mainText, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }

    // Scroll icon hover effect
    if (scrollIconRef.current) {
      const scrollIcon = scrollIconRef.current;

      scrollIcon.addEventListener("mouseenter", () => {
        gsap.to(scrollIcon, {
          scale: 1.2,
          rotation: 5,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      });

      scrollIcon.addEventListener("mouseleave", () => {
        gsap.to(scrollIcon, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      });
    }
  };

  // Enhanced scroll function with GSAP smooth scrolling
  const scrollDown = () => {
    const currentScroll = window.scrollY;
    const targetScroll = currentScroll + window.innerHeight;

    // Create a smooth scroll animation with GSAP
    gsap.to(window, {
      scrollTo: { y: targetScroll, autoKill: false },
      duration: 1.8,
      ease: "power3.inOut",
      onStart: () => {
        // Add a subtle scale effect to the scroll icon when clicked
        gsap.to(scrollIconRef.current, {
          scale: 0.8,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        });
      },
    });
  };

  // Alternative method using Lenis directly (if you want to use Lenis instead)
  const scrollDownWithLenis = () => {
    // @ts-ignore - accessing custom property
    if (window.lenis) {
      // @ts-ignore
      window.lenis.scrollTo(window.scrollY + window.innerHeight, {
        duration: 1.8,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      });
    } else {
      // Fallback to GSAP scroll
      scrollDown();
    }
  };

  return (
    <>
      {/* Show loading screen while loading */}
      {isLoading && (
        <MultilingualLoader onLoadingComplete={handleLoadingComplete} />
      )}

      {/* Navigation component */}
      <Navigation />

      {/* Main content container */}
      <div ref={containerRef} className={styles.container_main}>
        {/* Main heading with gradient text effect and GSAP animation */}
        <div
          ref={mainTextRef}
          className={`${styles.main} ${styles.gradient_text}`}
          style={{
            cursor: "default",
            userSelect: "none", // Prevent text selection for cleaner interaction
          }}
        >
          Hey, I'm Aditya Shah
        </div>

        {/* Description text with GSAP animation */}
        <div
          ref={descriptionRef}
          className={styles.lorem}
          style={{
            userSelect: "none", // Prevent text selection for cleaner interaction
          }}
        >
          I'm just a hobby front-end web developer making this website to learn
          new things and have fun with web development. I love to create new
          things and explore new technologies.
        </div>
      </div>

      {/* Tech Stack Section - This will be smoothly scrolled to */}
      <TechStack />
    </>
  );
}
