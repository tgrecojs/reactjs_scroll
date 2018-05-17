import React from "react";
import { Comp, RenderComps } from './Slider';
import Movies, { MovieDetails } from './Movies';
import styled,{ css,injectGlobal } from 'react-emotion';
import { Wrapper, Row, RowContent } from '../shared/styled';

injectGlobal`
body,
html {
  padding: 0 10px;
  margin: 0;
  background: #0e0f11;
  color: #ecf0f1;
  font-family: 'Crimson Text', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
* {
  box-sizing: border-box;
}
h1,
p {
  text-align: center;
}
p {
  width: 100%;
  max-width: 500px;
  margin: auto;
}
`;

const App = ({content = 'what up babe'}) => 
<Wrapper>
<h1>Pure CSS Netflix Video Carousel</h1>
<Row>
  <RowContent>
        <Movies>
        {
            ({loading, movies}) => loading ? <p>loading... </p>: <RenderComps data={movies}/>
        }
        </Movies>
        </RowContent>
        </Row>
    </Wrapper>
        ;
export default App;
