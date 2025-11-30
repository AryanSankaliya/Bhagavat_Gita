import React from "react";
import { useParams } from "react-router-dom";
import Getpartchap from "./Getpartchap";
import Getverseofchap from "./Getverseofchap";

function ChapterCarousel() {
  const { chap } = useParams();

  const chapterResult = Getpartchap(chap);
  const { data: verses, loading: versesLoading } = Getverseofchap(chap);

  if (chapterResult.loading || versesLoading) return <p className="text-center">Loading...</p>;

  return (
    <div className="container my-5">
      <h2 className="text-center text-warning">Chapter {chapterResult.data.chapter_number}</h2>
      <h1 className="text-center fw-bold">{chapterResult.data.name_translated}</h1>
      <h5 className="text-center text-muted">({chapterResult.data.name})</h5>
      <p className="text-center mt-3">{chapterResult.data.chapter_summary}</p>
      <p className="text-center"><b>Verses:</b> {chapterResult.data.verses_count}</p>

      <hr />

      {verses.map((verse) => (
        <div className="row my-4" key={verse.id}>
          <div className="col-2 text-warning fw-bold">Verse {verse.verse_number}</div>
          <div className="col">{verse.translations[4]?.description}</div>
        </div>
      ))}
    </div>
  );
}

export default ChapterCarousel;
