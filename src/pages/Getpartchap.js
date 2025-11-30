import { useState, useEffect } from "react";

function Getpartchap(chap) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chap}/`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "14e1270f77msh32112596f047c9bp148610jsncb722eb99974",
        "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
      },
    })
      .then(res => res.json())
      .then(res => { setData(res); setLoading(false); })
      .catch(err => console.error(err));
  }, [chap]);

  return { data, loading };
}

export default Getpartchap;
