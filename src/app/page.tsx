"use client"; // This is a client component which means it can use hooks and state
import { useState } from "react";
import Image from "next/image";
import styles from "./styles/page.module.css";
import Link from "next/link";
import MultilingualLoader from "../components/MultilingualLoader";
import Navigation from "../components/Navigation";
import TechStack from "../components/TechStack";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isLoading && (
        <MultilingualLoader onLoadingComplete={handleLoadingComplete} />
      )}
      <Navigation />
      <div className={styles.container_main}>
        <div className={`${styles.main} ${styles.gradient_text}`}>
          Hey, I'm Aditya Shah
        </div>
        <div className={styles.lorem}>
          I'm just a hobby front-end web developer making this website to learn
          new things and have fun with web development. I love to create new
          things and explore new technologies.
        </div>

        {/* Scroll Down Icon */}
        <div className={styles.scrollIcon} onClick={scrollDown}>
          <svg
            width="24"
            height="40"
            viewBox="0 0 24 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.mouseIcon}
          >
            {/* Mouse outline */}
            <rect
              x="2"
              y="2"
              width="20"
              height="36"
              rx="10"
              ry="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            {/* Scroll wheel */}
            <rect
              x="11"
              y="8"
              width="2"
              height="8"
              rx="1"
              fill="currentColor"
              className={styles.wheelAnimation}
            />
          </svg>

          {/* Down arrow */}
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.arrowIcon}
          >
            <path
              d="M2 2L10 10L18 2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Tech Stack Section */}
      <TechStack />
    </>
  );
}
