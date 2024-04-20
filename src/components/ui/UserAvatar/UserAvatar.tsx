import * as React from 'react';
import styles from './UserAvatar.module.css';

interface UserAvatarProps {
  alt: string;
  src: string;
}
function UserAvatar({ src, alt }: UserAvatarProps) {
  const [imgSrc, setImgSrc] = React.useState(src);

  return (
    <img
      className={styles.avatar}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc('/default-avatar.png')}
    />
  );
}

export default UserAvatar;
