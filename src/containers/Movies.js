import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';


//Api URL
const API_URL = 'https://api.themoviedb.org/3';

//Api Key
const API_KEY = '0d59c137d4b1775154cc094577fbe290';

//Images URL
// const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/w500/';


class MovieContainer extends Component {
  constructor() {
      super();
      console.log("hola");
      this.state = {
        movie: API_URL
      };
  }

  componentDidMount() {
    const url = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movie: data.results[0]
        });
      });
  }

  render() {
   /* const movieList = this.state.movie.map(movie => (
        <MovieCard info={movie} key={movie.id} />
    )); */
    
    return (
      <div>
        <MovieCard 
        name={this.state.movie.title}
        overview={this.state.movie.overview}
         />
      </div>
    );
  }
}

export default MovieContainer;