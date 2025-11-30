import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import About from './pages/About';
import Donate from './pages/Donate';
import ChapterCarousel from './pages/ChapterCarousel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="about" element={<About />} />
          <Route path="donate" element={<Donate />} />
          <Route path="chapters/:chap" element={<ChapterCarousel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
