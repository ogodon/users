import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import List from './users/components/list';
import UserDetail from './users/components/user';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'users/get' });
  });
  return (
    <div className="app">
      <BrowserRouter>
        <div className='header'>
          <Link to='/'>Users' list</Link>
        </div>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/user/:firstname/:lastname/:uuid" element={<UserDetail />} />
          <Route path="/user/:firstname//:uuid" element={<UserDetail />} />
          <Route path="/user//:lastname/:uuid" element={<UserDetail />} />
          <Route path="/user///:uuid" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
