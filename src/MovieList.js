import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

const MovieDetails = styled.li`
  color: blue;
  list-style: none;
  font-size: 1.5rem;
  em {
    color: blue;
    font-size: 2rem;
    text-shadow: 1px 1px 1px black;
  }
`

const MovieInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 700px;
`

const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
`

class MovieList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      results: []
    }
  }

  componentWillMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=528804f087c8209bcf748a9147e6c57d&language=en-US&sort_by=popularity.desc&certification_country=united%20states&include_adult=false&include_video=false&page=1&primary_release_year=1989&year=1989"
      )
      .then(response => {
        this.setState(response.data)
      })
  }

  render() {
    const movies = this.state.results.map((movie, index) => {
      let moviePoster =
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2" +
        this.state.results[index].poster_path

      return (
        <MovieInfo key={movie.id}>
          <figure>
            <img src={moviePoster} alt="movie poster" />
          </figure>
          <MoviesList>
            <MovieDetails>
              <strong>
                <em>Movie Title</em>
              </strong>{" "}
              : {movie.title}
            </MovieDetails>
            <MovieDetails>
              <strong>
                <em>Date Released</em>
              </strong>
              : {movie.release_date}
            </MovieDetails>
            <MovieDetails>
              <strong>
                <em>Overall Rating</em>
              </strong>
              : {movie.vote_average}
            </MovieDetails>
          </MoviesList>
        </MovieInfo>
      )
    })

    return <div>{movies}</div>
  }
}

export default MovieList
