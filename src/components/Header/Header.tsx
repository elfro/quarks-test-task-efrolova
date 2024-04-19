import { useAppDispatch, useAppSelector } from '@/app/hooks.ts';

import styles from './Header.module.css';
import { resetUser } from '@/features/user/user-slice.ts';
import { useNavigate } from 'react-router-dom';

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
