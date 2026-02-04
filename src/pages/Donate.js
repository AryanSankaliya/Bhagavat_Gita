import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/donate.css"; // apni css file import kar le

function Donate() {
  return (
    <>
      <section className="hero-wrapper">
        <img
          src="/hero_img.webp"
          alt="Bhagavad Gita Hero"
          className="hero-img"
        />
        <div className="hero">
          <div className="hero-text">
            <h1>Donation For <br /><span>Bhagavad Gita</span></h1>
            <button className="hero-btn">Read now</button>
          </div>
        </div>
      </section>

      {/* Support / Donation Section */}
      <div className="container text text-center fs-4 col-8">
        <div className="row">
          <div className="col fw-bold fs-2 te mb-2">
            Support the Digital Revival of Ancient Wisdom
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              Your generous support enables the Ved Vyas Foundation to offer a
              suite of spiritual resources entirely free of charge and devoid of
              distractions. By donating, you help us maintain and expand our
              offerings, such as the ad-free{" "}
              <Link to="/">Bhagavad Gita website</Link>, <Link to="/">mobile apps</Link>{" "}
              and <Link to="/">GitaGPT AI chatbot</Link>, ensuring that the essence
              of Sanatana Dharma reaches the hands and hearts of seekers around
              the world without any barriers.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              Our dedication is to the digitization and modern presentation of
              the Ramayan, Mahabharat, Vedas, Puranas, and other precious Indian
              scriptures. With your contribution, we continue to create and
              innovate—providing state-of-the-art applications for
              state-of-the-art spirituality, accessible to all, anytime and
              anywhere.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              src="https://qrtor.net/qrbg.png"
              height="250px"
              alt="UPI QR Code"
            />
          </div>
        </div>
        <div className="row">
          <div className="col fw-bold">
            <p>Scan the QR code with any UPI app to make your donation.</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              UPI ID:{" "}
              <span style={{ color: "orange" }}>vedvyasfoundation@icici</span>
            </p>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "100px" }} />
    </>
  )
}

export default Donate;
