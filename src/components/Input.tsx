import { InputProps } from '../utils';

export default function Input({ type = 'text', value, onChange, label }: InputProps) {
  return (
    <label htmlFor={ label }>
      { label }
    <input
      type={ type }
      value={ value }
      onChange={ onChange }
      id={ label }
      />
    </label>
  );
}
