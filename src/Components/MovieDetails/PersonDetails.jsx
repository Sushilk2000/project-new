import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PersonData() {
  const nav = useLocation();

  const [data, setData] = useState();
  async function fetchData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzQxMmU4YTIzZTdhNjA3ZmEzOGZmYzE4ZjMwMmRmOSIsInN1YiI6IjY1YWZkNTEyNjdiNjEzMDBhZmYwYTYwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q26i66D6UDNHaJIdSnCDEHcPjZj8Qh6QBLiZi0Th9B4",
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3${nav.pathname}}`,
      options
    );
    const datta = await response.json();
    setData(datta);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return <>{data?.name}</>;
}
export default PersonData;
