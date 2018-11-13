import React, { Component } from "react"
import styled from "styled-components"

import "./App.css"
import MovieList from "./MovieList"

const Title = styled.main`
  padding-top: 2rem;
  width: 600px;
  color: blue;
  text-shadow: 1.2px 1.2px 1.2px black;
`

const Header = styled.header`
  color: blue;
  width: 800px;
  text-shadow: 1px 1px 1px black;
  font-size: 1.3rem;
`

class App extends Component {
  render() {
    return (
      <>
        <Header>
          <h1>Movies of 1989</h1>
          <p>1989's greatest movies of this year!</p>
        </Header>
        <Title>
          <h2>
            <em>Movies</em>:
          </h2>
        </Title>
        <MovieList />
      </>
    )
  }
}

export default App
