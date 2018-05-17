import React from 'react';
import PropTypes from "prop-types";
import styled from 'react-emotion';




 /**
  * Details
  * 
  */

 const imageBg = (props) => css`
 background-image: linear-gradient( 
     rgba(0,0,0,.1),
     rgba(0,0,0,.1)
 ), url(${props.imageUrl});
 position: absolute;
 left: 0;
 top: 0;
 height: 300px;
`
const MovieDiv = styled('div')({
 height: '400px',
 width: '300px',
 position: 'relative'
})

const StyledImage = styled('img')`
 ${imageBg}
`;

const Yes = styled.div`
 display: flex;
 height: 400px;
 width: 400px;
 background: teal;
 color: black;
 &::before {
 content: 'yooo'
 }
`;

const MovieText = styled('h2')({
 zIndex: '100',
 position: 'absolute',
 color: 'white',
 fontSize: '10px',
 bottom: '150px'
});

export const MovieDetails = ({title, rating, imageUrl }) => (
 <MovieDiv>
 <MovieText>{title}</MovieText>
 </MovieDiv>
);



  /**
   * 
   * Main component
   */
const Wrapper = styled.div`
display: flex;
max-width: 100vw;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
`;
const wrapperStyles = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  background: "teal",
  justifyContent: "space-between",
  alignItems: "center"
};

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
        loading: true,
    }, this.fetchMovies);
  }

  render() {
    return (
        this.props.children(this.state)
    );
  }
}