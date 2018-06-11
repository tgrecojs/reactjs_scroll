import React from 'react';
import { RenderComps } from './Slider';
import Movies from './Movies';
import {  injectGlobal } from 'react-emotion';
import Slider from './Slider';
import LoadingSpinner from '../shared/Spinner';
import { Wrapper, Container, Row, RowContent, Spinner } from '../shared/styled';
import PropTypes from 'prop-types';
import { actionTypes } from '../store/reducer';

import { connect } from 'react-redux';
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

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch({type: actionTypes.initialize });
  }
  render() {
    return (
      <Wrapper>
        <Container>
          <h1>{this.props.headline}</h1>
          <Row>
            <RowContent>
              {
                this.props.loading === true ? <LoadingSpinner /> : <Slider data={this.props.data}/>
              }
            </RowContent>
          </Row>
        </Container></Wrapper>
    );
  }
};

App.propTypes = {
  headline: string
};

const mapStateToProps = state => ({loading: state.loading, data: state.data });

export default connect(mapStateToProps)(App);
