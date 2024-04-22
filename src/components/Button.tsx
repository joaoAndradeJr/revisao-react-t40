import { ButtonProps } from '../types';

export default function Button({
  type = 'button', onClick = () => {}, disabled = false, value, className = '',
}: ButtonProps) {
  return (
    <button
      type={ type }
      onClick={ onClick }
      disabled={ disabled }
      className={ className }
    >
      { value }
    </button>
  );
}
