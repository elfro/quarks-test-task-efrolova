import Heading from '@/components/ui/Heading/Heading';

import styles from './PublicHeader.module.css';

function PublicHeader() {
  return (
    <div className={styles.headingWrapper}>
      <Heading textAlign='center'>Messenger app</Heading>
    </div>
  );
}

export default PublicHeader;
