"use client"; // This is a client component which means it can use hooks and state
import { useState } from "react";
import Image from "next/image";
import styles from "./styles/page.module.css";
import Link from "next/link";
import MultilingualLoader from "../components/MultilingualLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <MultilingualLoader onLoadingComplete={handleLoadingComplete} />
      )}
      <div className={styles.container_main}>
        <div className={`${styles.main} ${styles.gradient_text}`}>
          Hey, I'm Aditya Shah
        </div>
        <div className={styles.lorem}>
          I'm just a hobby front-end web developer making this website to learn
          new things and have fun with web development. I love to create new
          things and explore new technologies.
        </div>
      </div>
    </>
  );
}
