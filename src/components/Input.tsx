import { InputProps } from '../types';

export default function Input({
  type = 'text', value, onChange, id, placeholder = '', className = '',
}: InputProps) {
  return (
    <input
      type={ type }
      value={ value }
      onChange={ onChange }
      id={ id }
      placeholder={ placeholder }
      className={ className }
    />
  );
}
