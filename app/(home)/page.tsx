"use client" // Client Side Fetch시 Client Component 의미인 use client를 명시해야하며 metadata를 export할 수 없다.
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
    const json = await response.json()
    setMovies(json);
    setIsLoading(false)
  }
  useEffect(()=> {
    getMovies();
  }, [])
  return <div>
    {isLoading ? "Loading..." : JSON.stringify(movies)}
  </div>
}