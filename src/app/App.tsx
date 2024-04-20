import { Navigate, Route, Routes } from 'react-router-dom';

import LoginPage from '@/pages/LoginPage/LoginPage';
import ThreadPage from '@/pages/ThreadPage/ThreadPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/thread' element={<ThreadPage />} />
    </Routes>
  );
}

export default App;
