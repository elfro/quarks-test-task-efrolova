import * as React from 'react';

import VisuallyHidden from '@/components/ui/VisuallyHidden/VisuallyHidden';
import { IconProps } from '@/components/ui/Icon/Icon';

import styles from './IconButton.module.css';

interface IconButtonProps {
  title: string;
  icon: React.ReactElement<IconProps>;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean | undefined;
}

function IconButton({ title, icon, onClick, disabled }: IconButtonProps) {
  return (
    <button className={styles.iconButton} onClick={onClick} disabled={disabled} title={title}>
      {icon}
      <VisuallyHidden>{title}</VisuallyHidden>
    </button>
  );
}

export default IconButton;
