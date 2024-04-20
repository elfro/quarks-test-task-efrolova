import { useAppDispatch, useAppSelector } from '@/app/hooks';

import styles from './Header.module.css';
import { resetUser } from '@/features/user/user-slice';
import { useNavigate } from 'react-router-dom';
import { resetMessages } from '@/features/messages/messages-slice';
import UserAvatar from '@/components/ui/UserAvatar/UserAvatar.tsx';
import Heading from '@/components/ui/Heading/Heading.tsx';
import IconButton from '@/components/ui/IconButton/IconButton.tsx';
import Icon from '../ui/Icon/Icon';

import Logout from '@/assets/logout.svg?react';
import Reset from '@/assets/reset.svg?react';

function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const isLoggedIn = user && user.id !== null;

  function handleResetMessages() {
    dispatch(resetMessages());
  }

  function handleExitChat() {
    dispatch(resetUser());
    dispatch(resetMessages());
    navigate('/login');
  }

  return (
    <header className={styles.header}>
      {!isLoggedIn && (
        <div className={styles.headingWrapper}>
          <Heading textAlign='center'>Messenger app</Heading>
        </div>
      )}
      {isLoggedIn && (
        <>
          {user.avatarURL && (
            <UserAvatar src={user.avatarURL} alt={`${user.username}'s photo in circle`} />
          )}
          {user.username && <Heading>{user.username}</Heading>}
          <div className={styles.actionsWrapper}>
            <IconButton
              title='Reset chat'
              icon={<Icon IconEl={Reset} />}
              onClick={handleResetMessages}
            ></IconButton>
            <IconButton
              title='Exit chat'
              icon={<Icon IconEl={Logout} />}
              onClick={handleExitChat}
            ></IconButton>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
