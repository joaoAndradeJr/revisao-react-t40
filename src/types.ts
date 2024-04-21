export type MovieType = {
  id: number;
  title: string;
  storyline: string;
  rating: number;
  image: string;
  bookmarked: boolean;
  genre: string[];
};

export type MovieCardProps = {
  movie: MovieType;
};

export type MoviesProps = {
  loading: {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  };
};
