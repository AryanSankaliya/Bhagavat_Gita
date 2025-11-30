import { useEffect, useState } from "react";

function Getallchap() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
     fetch(
      `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "14e1270f77msh32112596f047c9bp148610jsncb722eb99974", 
          "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json()) // convert response to JSON
      .then((res) => {
        console.log(res);
        setData(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return { data, loading, error };
}

export default Getallchap;
