import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';


//Api URL
const API_URL = 'https://api.themoviedb.org/3';

//Api Key
const API_KEY = '0d59c137d4b1775154cc094577fbe290';

//Images URL
// const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/w500/';


class MovieContainer extends Component {
  state = {
    movie: {
      poster: "",
      title: "",
      overview: "",
      rating: "",
      director: "",
      time: "",
      budget: "",
      revenue: ""
    },
    movieInfo: API_URL
  };

  componentDidMount() {
    const url = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movie: {
            poster: "",
            title: data.results[0].title,
            overview: data.results[0].overview,
            rating: data.results[0].vote_average,
            director: data.results[0].directors,
            time: data.results[0].time,
            budget: data.results[0].budget,
            revenue: data.results[0].revenue
          }
        });
      });
  }

  render() {
    return (
      <div>
        <h3>aqui va la data</h3>
        <MovieCard 
        name={this.state.movie.title}
        overview={this.state.movie.overview}
         />
      </div>
    );
  }
}

export default MovieContainer;