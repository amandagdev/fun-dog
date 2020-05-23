import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';

export default function RoutesApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}
