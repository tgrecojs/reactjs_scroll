import styled,{ css } from 'react-emotion';

export const Wrapper = styled('div')`
width: 100%;
`
export const Row = styled('div')`
  overflow: scroll;
  width: 100%;
`;


export const RowContent = styled('div')`
  transition: 450ms -webkit-transform;
  transition: 450ms transform, 450ms -webkit-transform;
  font-size: 0;
  white-space: nowrap;
  margin: 70.3125px 0;
  padding-bottom: 10px;
  :hover {
    transform: scale(1.5);
    opacity: 1;
     transform: translate3d(-62.5px, 0, 0);
  }
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
-webkit-transform-origin: center left;
      transform-origin: center left;
    :hover {
      transform: scale(1.5);
      opacity: 1;
    }
      :hover .deats {
          opacity: 1;
        }
        :hover ~ .tile {
          -webkit-transform: translate3d(125px, 0, 0);
                  transform: translate3d(125px, 0, 0);
        }
`;

/**
 * Add Dynamic Style for gradient
 */

export const TileImage = styled('img')`
width: 250px;
height: 140.625px;
-o-object-fit: cover;
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
display: #000;
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
  -o-object-fit: cover;
     object-fit: cover;
`