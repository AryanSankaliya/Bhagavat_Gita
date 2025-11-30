import React, { useState } from "react";
import "../styles/quote.css"; 

export default function Quotes() {
  // 🌟 Quotes Array
  const quotes = [
    {
      title: "Quote 1",
      text: "Whenever dharma declines and the purpose of life is forgotten, I manifest myself on earth. I am born in every age to protect the good, to destroy evil, and to reestablish dharma."
    },
    {
      title: "Quote 2",
      text: "You have the right to work, but never to the fruit of work. You should never engage in action for the sake of reward, nor should you long for inaction."
    },
    {
      title: "Quote 3",
      text: "The soul is neither born, and nor does it die."
    }
  ];

  // React State
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next Quote
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  // Previous Quote
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-wrapper">
        <img src="/hero_img.webp" alt="Bhagavad Gita Hero" className="hero-img" />
        <div className="hero-content">
          <h1>
            Bhagavad Gita Quotes By <br />
            <span>Lord Krishna</span>
          </h1>
          <button className="hero-btn">Read Now</button>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="quotes">
        <button className="quote-btn left" onClick={handlePrev}>
          &lt;
        </button>

        <div className="quote-box">
          <h3>{quotes[currentIndex].title}</h3>
          <p>{quotes[currentIndex].text}</p>
        </div>

        <button className="quote-btn right" onClick={handleNext}>
          &gt;
        </button>
      </section>
    </>
  );
}
