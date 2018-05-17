import styled, { css, keyframes } from 'react-emotion';

const BounceAnimation = keyframes`
  0%, 100% { 
    transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
  }`;

export const Wrapper = styled('div')`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
`;
export const Container = styled('div')`
width: 100%;
`;
export const Row = styled('div')`
  overflow: scroll;
  width: 100%;
`;

export const RowContent = styled('div')`
  transition: 450ms transform'
  font-size: 0;
  white-space: nowrap;
  margin: 70.3125px 0;
  padding-bottom: 10px;
  :hover {
    transform: scale(1.5);
    opacity: 1;
    transform: translate3d(-100px, 0, 0);
  }
`;
export const Spinner = styled('div')`
  width: 40px;
  height: 40px;
  position: relative;
  margin: 100px auto;
`;

export const Bounce = css`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #333;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${BounceAnimation} 2.0s infinite ease-in-out;
`;

export const FirstBall = styled('div')`
  ${Bounce}
`;

export const SecondBall = styled('div')`
  ${Bounce};
  animation-delay: -1.0s;
`;

export const Tile = styled('div')`
    position: relative;
    display: inline-block;
    width: 250px;
    height: 140.625px;
    margin-right: 10px;
    font-size: 20px;
    cursor: pointer;
    transition: 450ms all;
    transform-origin: center left;
    :hover {
      transform: scale(1.5);
      opacity: 1;
    }
    :hover .deats {
        opacity: 1;
      }
      :hover ~ .tile {
        transform: translate3d(125px, 0, 0);
      }
`;

/**
 * Add Dynamic Style for gradient
 */

export const TileImage = styled('img')`
  width: 250px;
  height: 140.625px;
  object-fit: cover;
`;

export const Details = css`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    font-size: 10px;
    opacity: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
    transition: 450ms opacity;
  :after,
  :before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: black;
  }
  :after {
    margin-top: -25px;
    margin-left: -25px;
    width: 50px;
    height: 50px;
    border: 3px solid #ecf0f1;
    line-height: 50px;
    text-align: center;
    border-radius: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1;
  }
  :before {
    content: '▶';
    left: 0;
    width: 100%;
    font-size: 30px;
    margin-left: 7px;
    margin-top: -18px;
    text-align: center;
    z-index: 2;
  }
`;

export const imageStyles = css`
  width: 250px;
  height: 140.625px;
  object-fit: cover;
`;
