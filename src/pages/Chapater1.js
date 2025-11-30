import React from "react";
import Getallchap from "./Getallchap";
import Getverseofchap from "./Getverseofchap";
import Getpartchap from "./Getpartchap";
import { useParams } from "react-router-dom";

function ChapterCarousel() {
  const { chap } = useParams();

  const result = Getpartchap(chap);
  const { data, loading } = Getverseofchap(chap);
  console.log(result);

  if (result.loading || loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <>
      <div id="carouselExample" className="carousel slide mt-4">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <p className="text-center fs-4" style={{ color: "orange" }}>
              CHAPTER {result.data.chapter_number}  
            </p>
            <p className="fs-1 fw-bold text-center">
              {result.data.name_translated}
            </p>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="col text-center fs-5">
                    {result.data.chapter_summary}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <hr style={{ marginTop: "50px" }} />

      <div className="container">
        <div className="row">
          <div className="col-8 fs-3">{result.data.verses_count} verse</div>
          <div className="col fs-3">
            <input type="text" placeholder="Go To verse" />
          </div>
        </div>
      </div>

      <hr />

      <div className="container">
        {data.map((verse) => (
          <div className="row my-5" key={verse.id}>
            <div className="col-2 fs-5 text-warning">
              VERSE {verse.verse_number}
            </div>
            <div className="col">{verse.translations[4].description}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ChapterCarousel;
