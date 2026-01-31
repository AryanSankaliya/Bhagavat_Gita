import { useState, useEffect } from "react";

function usePartialChapter(chap) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!chap) return;

    fetch(`https://${process.env.REACT_APP_RAPIDAPI_HOST}/v2/chapters/${chap}/`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
      },
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch chapter details");
        return res.json();
      })
      .then(res => { setData(res); setLoading(false); })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [chap]);

  return { data, loading, error };
}

export default usePartialChapter;
