import React from 'react';
import PropTypes from 'prop-types';


export default class FetchMovies extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  state = {
    loading: true,
    movies: []
  };

  fetchMovies = async () => {
    const data = await fetch('http://www.snagfilms.com/apis/films.json?limit=10');
    const response = await data.json();
    const movies = response.films.film;
    this.setState({
      loading: false,
      movies
    });
  }

  componentDidMount() {
    this.setState({
      loading: true
    }, this.fetchMovies);
  }

  render() {
    return (
      this.props.children(this.state)
    );
  }
}
