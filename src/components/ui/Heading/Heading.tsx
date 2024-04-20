import styles from './Heading.module.css';

interface HeaderProps {
  children: string;
  textAlign?: 'left' | 'right' | 'center';
}
function Heading({ textAlign = 'left', children }: HeaderProps) {
  return (
    <h1 className={styles.heading} style={{ textAlign }} title={children}>
      {children}
    </h1>
  );
}

export default Heading;
