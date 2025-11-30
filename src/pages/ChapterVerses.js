import React from "react";
import { useParams } from "react-router-dom";
import Getverseofchap from "./Getverseofchap";

function ChapterVerses() {
  const { chapnum } = useParams();
  const { data, loading, error } = Getverseofchap(chapnum);

  if (loading) {
    return <div className="text-center my-5">Loading verses...</div>;
  }

  if (error) {
    return <div className="text-center my-5 text-danger">{error}</div>;
  }

  return (
    <div className="container my-5">
      <h2>Verses of Chapter {chapnum}</h2>
      <div className="row">
        {data.map((verse) => (
          <div key={verse.verse_number} className="col-12 mb-3">
            <div className="card p-3 shadow-sm">
              <h5>Verse {verse.verse_number}</h5>
              <p>{verse.translations?.[0]?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterVerses;
