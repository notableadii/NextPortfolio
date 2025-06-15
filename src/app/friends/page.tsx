"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../styles/page.module.css";
import MultilingualLoader from "./components/Loader";

export default function TextPage() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <MultilingualLoader onLoadingComplete={handleLoadingComplete} />
      )}
      <div className={styles.container}>
        <h1>NIGGA</h1>
        <p>Dedicated to niggas</p>
        <Link href="/" className={styles.link}>
          Back to Home
        </Link>
      </div>
    </>
  );
}
