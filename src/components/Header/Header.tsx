import { useAppDispatch, useAppSelector } from '@/app/hooks';

import styles from './Header.module.css';
import { resetUser } from '@/features/user/user-slice';
import { useNavigate } from 'react-router-dom';
import { resetMessages } from '@/features/messages/messages-slice';

function Header() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLoggedIn = user && user.id;

  return (
    <header className={styles.header}>
      {isLoggedIn && (
        <div>
          <p>Hello, {user.username}</p>
          <button
            onClick={() => {
              dispatch(resetUser());
              dispatch(resetMessages());
              navigate('/login');
            }}
          >
            Exit chat
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
