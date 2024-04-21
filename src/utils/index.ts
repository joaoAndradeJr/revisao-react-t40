export const initialState = {
  name: '',
  email: '',
  password: '',
};

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  value: string;
};

export type InputProps = {
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
};
