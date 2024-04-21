export type MovieType = {
  id: number;
  title: string;
  subtitle: string;
  storyline: string;
  rating: number;
  imagePath: string;
  bookmarked: boolean;
  genre: string;
};

export type MovieCardProps = {
  movie: MovieType;
};
