import React, { useEffect, useState } from "react";
import MovieResult from "./MovieResult";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function SearchResults() {
  const path = useLocation();
  console.log(path);
  const [results, setResults] = useState([]); // Fix typo in const declaration
  async function fetchData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzQxMmU4YTIzZTdhNjA3ZmEzOGZmYzE4ZjMwMmRmOSIsInN1YiI6IjY1YWZkNTEyNjdiNjEzMDBhZmYwYTYwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q26i66D6UDNHaJIdSnCDEHcPjZj8Qh6QBLiZi0Th9B4",
      },
    };

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi${path.search}`,
        options
      );
      const data = await response.json();
      setResults(data.results);
      console.log(data);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
  }, []); // Add path.pathname as a dependency

  return (
    <>
      <div>
        <div className="">
          <input type="text" />
        </div>
        <div>
          {results.map(
            (item) =>
              item.media_type === "movie" && (
                <Link to={`/movie/${item.id}`} key={item.id}>
                  <MovieResult movie={item} />
                </Link>
              )
          )}
        </div>
      </div>
      {/* Add your rendering logic for the 'results' state here */}
    </>
  );
}

export default SearchResults;
