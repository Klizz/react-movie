import React, { Component } from "react";
import MovieInfo from "../components/MovieInfo";
import Actors from "../components/Actors";
import ClipLoader from "react-spinners/ClipLoader";

//Api URL
const API_URL = "https://api.themoviedb.org/3/";
//Api Key
const API_KEY = "0d59c137d4b1775154cc094577fbe290";
//Images URL

class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true })
    const url = `${API_URL}movie/${this.props.match.params.id}?api_key=${API_KEY}&language=en-US`;
    this.fetchMovie(url);
  }

  fetchMovie = url => {
    fetch(url)
      .then(data => data.json())
      .then(data => {
        if (data.status_code){
          this.setState({ loading: false })
        } else {
          this.setState({ movie: data }, () => {
              const crew = `${API_URL}movie/${this.props.match.params.id}/credits?api_key=${API_KEY}&language=en-US`;
              fetch(crew)
                .then(data => data.json())
                .then(data => {
                  const directors = data.crew.filter(
                    member => member.job === "Director"
                  );
                  this.setState({
                    actors: data.cast,
                    directors,
                    loading: false
                  });
                });
            }
          );
        }
      })
      .catch(error => console.error("Error: ", error));
  };

  render() {
    return (
      <div>
        {this.state.movie ? 
          <MovieInfo
            image={this.state.movie}
            movie={this.state.movie}
            overview={this.state.movie}
            value={this.state.vote_average}
            directors={this.state.directors}
            time={this.state.movie}
            budget={this.state.budget}
            revenue={this.state.revenue}
          />
         : null}
        {this.state.actors ? 
          <div className="container">
            <h2>Actors</h2>
            <div className="row">
              {this.state.actors.map((actor, i) => {
                return <Actors key={i} actor={actor} />
              })}
            </div>
          </div>
         : null}
         { !this.state.actors && !this.state.loading ? <h1>Not found</h1> : null }
         { this.state.loading ? <div className="center"><ClipLoader size={100} /></div> : null }
      </div>
    );
  }
}

export default Movie;
