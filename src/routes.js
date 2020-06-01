import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/home/';
import Dogs from './pages/dogs';

export default function RoutesApp() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dogs" element={<Dogs />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}
