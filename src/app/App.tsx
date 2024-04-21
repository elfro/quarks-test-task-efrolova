import { Navigate, Route, Routes } from 'react-router-dom';

import { useAppSelector } from '@/app/hooks';

import LoginPage from '@/pages/LoginPage/LoginPage';
import ThreadPage from '@/pages/ThreadPage';

function App() {
  const user = useAppSelector((state) => state.user);

  if (!user.id) {
    return (
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path='/thread' element={<ThreadPage />} />
      <Route path='*' element={<Navigate to='/thread' />} />
    </Routes>
  );
}

export default App;
