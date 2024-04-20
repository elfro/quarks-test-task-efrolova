import { Navigate, Route, Routes } from 'react-router-dom';

import LoginPage from '@/pages/LoginPage/LoginPage';
import ThreadPage from '@/pages/ThreadPage/ThreadPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/thread' element={<ThreadPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
