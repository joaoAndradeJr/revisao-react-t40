import { ButtonProps } from '../utils';

export default function Button({
  type = 'button', onClick = () => {}, disabled = false, value,
}: ButtonProps) {
  return (
    <button
      type={ type }
      onClick={ onClick }
      disabled={ disabled }
    >
      { value }
    </button>
  );
}
