import React from "react";
import styles from "@/app/styles/herosection.module.css";
import Link from "next/link";

const HeroSection = ({}) => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.background}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ebff1e0f-5704-423f-b4c6-94914dabe25b/ef4124a3-79cc-43d1-bc9e-0ad97609da61/SE-en-20220509-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/ebff1e0f-5704-423f-b4c6-94914dabe25b/ef4124a3-79cc-43d1-bc9e-0ad97609da61/SE-en-20220509-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/ebff1e0f-5704-423f-b4c6-94914dabe25b/ef4124a3-79cc-43d1-bc9e-0ad97609da61/SE-en-20220509-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/ebff1e0f-5704-423f-b4c6-94914dabe25b/ef4124a3-79cc-43d1-bc9e-0ad97609da61/SE-en-20220509-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt=""
        />
        <div className={styles.gradient}></div>
      </div>
      <div className={styles.hero_content}>
        <h1>
          Unravel the <span>Magic</span> of Movies
        </h1>
        <p>
          Discover cinematic wonders! Explore classics to blockbusters.
          Heart-pounding action, heartwarming romance, mind-bending mysteries.
          Delight all movie lovers. Let cinema's magic take you on an
          unforgettable journey
        </p>
        <Link href="/movies">
          <button className={styles.button}>Explore Movies</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
