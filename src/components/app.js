import React from 'react';
import { RenderComps } from './Slider';
import Movies from './Movies';
import {  injectGlobal } from 'react-emotion';
import {Spinner, FirstBall, SecondBall, Wrapper, Container, Row, RowContent } from '../shared/styled';
import PropTypes from 'prop-types';
const { string } = PropTypes;

injectGlobal`
body,
html {
  padding: 0 10px;
  margin: 0;
  background: #cc2244;
  color: #ecf0f1;
  font-family: 'Crimson Text', sans-serif;
  min-height: 100vh;
}
h1 {
    text-align: center;
}
* {
  box-sizing: border-box;
}
`;

const LoadingSpinner = () => (
  <Spinner>
    <FirstBall />
    <SecondBall />
  </Spinner>
);
const App = ({headline = 'Snag Films Catalog'}) =>
  <Wrapper>
    <Container>
      <h1>{headline}</h1>
      <Row>
        <RowContent>
          <Movies>
            {
              ({loading, movies}) => loading ?
                <LoadingSpinner /> :
                <RenderComps data={movies}/>
            }
          </Movies>
        </RowContent>
      </Row>
    </Container></Wrapper>
        ;

App.propTypes = {
  headline: string
};

export default App;
