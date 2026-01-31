import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const Quotes = lazy(() => import('./pages/Quotes'));
const About = lazy(() => import('./pages/About'));
const Donate = lazy(() => import('./pages/Donate'));
const ChapterCarousel = lazy(() => import('./pages/ChapterCarousel'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="quotes" element={<Quotes />} />
            <Route path="about" element={<About />} />
            <Route path="donate" element={<Donate />} />
            <Route path="chapters/:chap" element={<ChapterCarousel />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
