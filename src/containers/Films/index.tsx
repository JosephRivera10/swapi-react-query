import React, { useState } from "react";
import callApi from "../../utils/callApi";
import { useQuery } from "@tanstack/react-query";
import FilmCard from "./filmCard";
import FilmCrawl from "./filmCrawl";
import styles from "./Films.module.css";

const Films = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const baseURL = "https://swapi.dev/api/films";
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["films"],
    queryFn: () => callApi(baseURL),
  });

  const handleFilmSelect = (id: number) => {
    const result = data.results.filter((item: any) => item.episode_id === id);
    setSelectedFilm(result[0]);
  };
  return (
    <>
      <div className={styles.cardContainer}>
        {isPending && <div>Loading...</div>}
        {isError && <div>{error.message}</div>}

        <FilmCard
          onSelect={handleFilmSelect}
          films={data?.results}
          selectedFilm={selectedFilm}
        />
      </div>

      <div className={styles.crawlContainer}>
        {selectedFilm && <FilmCrawl selectedFilm={selectedFilm} />}
      </div>
    </>
  );
};

export default Films;
