import { Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/HomePage/HomePage.tsx';
import LoginPage from '@/pages/LoginPage/LoginPage.tsx';
import ThreadPage from '@/pages/ThreadPage/ThreadPage.tsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/thread' element={<ThreadPage />} />
    </Routes>
  );
}

export default App;
