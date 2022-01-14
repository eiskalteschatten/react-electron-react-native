import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setPrefersDarkMode } from './store/app/actions';

import MainLayout from './components/MainLayout';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrefersDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches));

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      dispatch(setPrefersDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches));
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
