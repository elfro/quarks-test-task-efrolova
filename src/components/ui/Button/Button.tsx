import * as React from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  title: string | undefined;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean | undefined;
}
function Button({ title, children, onClick, disabled }: ButtonProps) {
  return (
    <button
      title={title}
      aria-label={title}
      onClick={onClick}
      disabled={disabled}
      className={styles.button}
    >
      {children}
    </button>
  );
}

export default Button;
