export interface MediaContent {
  id: number;
  poster_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
  title: string;
  original_title: string;
  first_air_date: string;
  original_name: string;
  rating_color: string;
}

export type MediaType = 'movie' | 'tv';
