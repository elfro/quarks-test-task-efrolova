import styles from './Spinner.module.css';
import Icon, { IconProps } from '@/components/ui/Icon/Icon.tsx';

import Loader from '@/assets/loader.svg?react';

function Spinner({ size, thickness }: Partial<IconProps>) {
  return (
    <div className={styles.wrapper}>
      <Icon IconEl={Loader} size={size} thickness={thickness} />
    </div>
  );
}

export default Spinner;
