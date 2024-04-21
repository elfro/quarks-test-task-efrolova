import { useAppDispatch, useAppSelector } from '@/app/hooks';

import { resetMessages } from '@/features/messages/messages-slice';
import { resetUser } from '@/features/user/user-slice';

import UserAvatar from '@/components/ui/UserAvatar/UserAvatar';
import Heading from '@/components/ui/Heading/Heading';
import IconButton from '@/components/ui/IconButton/IconButton';
import Icon from '@/components/ui/Icon/Icon';

import styles from './ThredHeader.module.css';
import Logout from '@/assets/logout.svg?react';
import Reset from '@/assets/reset.svg?react';

function ThreadHeader() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  function handleResetMessages() {
    if (window.confirm('Do you really want to delete all messages?')) {
      dispatch(resetMessages());
    }
  }

  function handleExitChat() {
    if (window.confirm('Do you really want to leave the chat?')) {
      dispatch(resetUser());
      dispatch(resetMessages());
    }
  }

  return (
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
  );
}

export default ThreadHeader;
