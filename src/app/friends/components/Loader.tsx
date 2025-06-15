// components/MultilingualLoader.js
"use client";
import { useState, useEffect } from "react";
import styles from "./Loader.module.css";

interface MultilingualLoaderProps {
  onLoadingComplete: () => void;
}

const MultilingualLoader = ({ onLoadingComplete }: MultilingualLoaderProps) => {
  const greetings = [
    { text: "Nigga", lang: "English" },
    { text: "gente negra", lang: "Spanish" },
    { text: "Les Noirs", lang: "French" },
    { text: "कल्लू", lang: "Hindi" },
    { text: "Schwarze Menschen", lang: "German" },
    { text: "I neri", lang: "Italian" },
    { text: "黒人", lang: "Japanese" },
    { text: "الناس السود", lang: "Arabic" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Start the animation sequence
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentIndex < greetings.length) {
      const timer = setTimeout(() => {
        if (currentIndex === greetings.length - 1) {
          // Last greeting - start completion sequence
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 300);
          }, 400);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      }, 400); // 0.5 seconds per greeting (was 1000ms)

      return () => clearTimeout(timer);
    }
  }, [currentIndex, greetings.length, onLoadingComplete]);

  return (
    <div
      className={`${styles.loaderContainer} ${
        isComplete ? styles.fadeOut : ""
      }`}
    >
      <div className={styles.loaderContent}>
        {greetings.map((greeting, index) => (
          <div
            key={index}
            className={`${styles.greeting} ${
              index === currentIndex && isVisible ? styles.active : ""
            } ${index < currentIndex ? styles.completed : ""}`}
          >
            {greeting.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultilingualLoader;
