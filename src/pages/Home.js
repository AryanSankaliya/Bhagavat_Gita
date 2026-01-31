import React from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";
import useChapters from "../hooks/useChapters";
import SEO from "../components/SEO";

function Home() {
  const navigate = useNavigate();
  const { data, loading, error } = useChapters();

  if (loading) return <div className="text-center my-5">Loading chapters...</div>;
  if (error) return <div className="text-center my-5 text-danger">{error}</div>;

  return (
    <>
      <SEO title="Home" description="Read the Bhagavad Gita online. Explore all chapters and verses." />
      {/* Hero Section */}
      <div className="hero-wrapper">
        {/* Hero Image */}
        <img src="/hero_img.webp" alt="Bhagavad Gita Hero" className="hero-img" />

        {/* Overlay Text + Button */}
        <div className="hero-content">
          <h1>Experience the Gita</h1>
          <h2><span>Anywhere, Anytime</span></h2>
          <button onClick={() => navigate("/chapters/1")} className="hero-btn">
            Start Reading
          </button>
        </div>
      </div>

      {/* Chapters Section */}
      <div className="chapters container my-5">
        <h2 className="text-center mb-4">Chapters</h2>
        <div className="chapter-grid">
          {data.map((chap) => (
            <div
              className="chapter-card"
              key={chap.chapter_number}
              onClick={() => navigate(`/chapters/${chap.chapter_number}`)}
            >
              <div className="chapter-header">Chapter {chap.chapter_number}</div>
              <div className="chapter-title">{chap.name_translated}</div>
              <p className="chapter-text">{chap.chapter_summary}</p>
              <div className="chapter-footer">{chap.verses_count ?? chap.verses?.length ?? "—"} Verses</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
