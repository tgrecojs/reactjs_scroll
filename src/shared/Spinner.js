import React from 'react';
import { Spinner, FirstBall, SecondBall } from './styled';

const LoadingSpinner = () => (
  <Spinner>
    <FirstBall />
    <SecondBall />
  </Spinner>
);

export default LoadingSpinner;
