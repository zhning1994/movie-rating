import React, { useEffect } from "react";
import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";

export default function Home() {
  const dispatch = useDispatch();
  const movieText = "Harry";
  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
}
