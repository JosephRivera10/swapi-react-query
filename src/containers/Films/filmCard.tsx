import React from "react";
import styles from "./Films.module.css";

interface FilmObject {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  starships: string[];
  title: string;
  url: string;
  vehichles: string[];
}

interface Props {
  onSelect: (id: number) => void;
  films: FilmObject[];
  selectedFilm: FilmObject | null;
}

const FilmCard = ({ onSelect, films, selectedFilm }: Props) => {
  if (!films) return null;
  return (
    <>
      {films.map((item) => (
        <div
          key={item.episode_id}
          className={`${styles.card} ${
            selectedFilm?.episode_id === item.episode_id
              ? styles.selectedFilm
              : ""
          }`}
          onClick={() => onSelect(item.episode_id)}
        >
          {item.title}
        </div>
      ))}
    </>
  );
};

export default FilmCard;
