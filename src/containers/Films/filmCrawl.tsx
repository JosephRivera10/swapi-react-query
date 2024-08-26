import React from "react";

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
  selectedFilm: FilmObject | null;
}

const FilmCrawl = ({ selectedFilm }: Props) => {
  return <div>{selectedFilm?.opening_crawl}</div>;
};

export default FilmCrawl;
