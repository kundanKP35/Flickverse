import React from 'react'
import styles from "@/app/styles/common.module.css";

import { getTrendingShows } from '@/utils/requests';
import ShowCard from '../components/ShowCard';
const page = async() => {
    const trendingShows = await getTrendingShows();

    return (
        <>
            <div className={styles.container}>
              <h1 className={styles.movie_heading}>Top Trending Shows</h1>
              <div className={styles.card_section}>
                {trendingShows.map((show) => {
                  return <ShowCard key={show.id} show={show} />;
                })}
              </div>
            </div>
        </>
      );
}

export default page