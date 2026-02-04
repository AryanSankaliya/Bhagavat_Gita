import React from "react";
import { useParams } from "react-router-dom";
import usePartialChapter from "../hooks/usePartialChapter";
import useVerses from "../hooks/useVerses";

function ChapterCarousel() {
  const { chap } = useParams();

  const { data: chapterData, loading: chapterLoading, error: chapterError } = usePartialChapter(chap);
  const { data: verses, loading: versesLoading, error: versesError } = useVerses(chap);

  if (chapterLoading || versesLoading) return <p className="text-center">Loading...</p>;
  if (chapterError || versesError) return <p className="text-center text-danger">Error: {chapterError || versesError}</p>;

  return (
    <div className="container my-5">
      <h2 className="text-center text-warning">Chapter {chapterData.chapter_number}</h2>
      <h1 className="text-center fw-bold">{chapterData.name_translated}</h1>
      <h5 className="text-center text-muted">({chapterData.name})</h5>
      <p className="text-center mt-3">{chapterData.chapter_summary}</p>
      <p className="text-center"><b>Verses:</b> {chapterData.verses_count}</p>

      <hr />

      {verses.map((verse) => (
        <div className="row my-4" key={verse.id}>
          <div className="col-12 col-md-2 text-warning fw-bold mb-2 mb-md-0">Verse {verse.verse_number}</div>
          <div className="col-12 col-md-10">{verse.translations[4]?.description}</div>
        </div>
      ))}
    </div>
  );
}

export default ChapterCarousel;
