/* eslint-disable import/first */
import React, { Component } from "react";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import LoadMore from "../components/LoadMore";

//Api URL
const API_URL = "https://api.themoviedb.org/3";
//Api Key
const API_KEY = "0d59c137d4b1775154cc094577fbe290";
//Images URL
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";

class Home extends Component {
  state = {
    movie: [],
    heroImage: null,
    currentPage: 0,
    loadedPages: 0,
    search: ""
  };

  componentDidMount() {
    const url = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchMovies(url);
  }

  loadMoreMovies = () => {
    let url = "";
    if (this.state.search === "") {
      url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this
        .state.currentPage + 1}`;
    } else {
      url = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query${
        this.state.search
      }&page=${this.state.currentPage + 1}`;
    }
    this.fetchMovies(url);
  };

  fetchMovies = (url) => {
    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({
          movie: [...this.state.movie, ...data.results],
          heroImage: this.state.heroImage || data.results[0],
          currentPage: data.page,
          loadedPages: data.total_pages
        });
      })
      .catch(error => console.log("Error", error));
  };

  render() {
    console.log(this.state.movie.title)
    return (
      <div>
        {this.state.heroImage ?
            <div>
            < Hero
            image={`${IMAGE_BASE_URL}w1280${this.state.heroImage.backdrop_path}`}
            name={this.state.heroImage.title}
            overview={this.state.heroImage.overview}
            />
            </div> :null }
        <div className="container" >
        <div className="row">
        {this.state.movie.map((movie, i) => {
          return(
            <MovieCard
            key={i}
            linkID={`/movie/${movie.id}`}
            poster={`${IMAGE_BASE_URL}w500${movie.poster_path}`}
            />
          );
        })}
        </div>
        <LoadMore />
        </div>
      </div>
    );
  }
}

export default Home;
