export type MovieType = {
  id?: number;
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

export const initialState = {
  name: '',
  email: '',
  password: '',
};

export const movieInitialState = {
  title: '',
  storyline: '',
  rating: 0,
  image: '',
  bookmarked: false,
  genre: [],
};

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  value: string;
  className?: string;
};

export type InputProps = {
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  id: string;
  placeholder?: string;
  className?: string;
};

export type LoadingProps = {
  loading: {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  };
};
