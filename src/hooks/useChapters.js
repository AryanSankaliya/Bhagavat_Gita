import { useEffect, useState } from "react";

function useChapters() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://${process.env.REACT_APP_RAPIDAPI_HOST}/v2/chapters/?skip=0&limit=18`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
           throw new Error(`API Error: ${res.statusText}`);
        }
        return res.json();
      })
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}

export default useChapters;
