import React from "react";
import styled, { css} from 'react-emotion';
import cuid from 'cuid';
import { Wrapper, Row, RowContent, Tile, imageStyles, Details } from '../shared/styled'

const names = [{id: cuid() ,name:'One Name'}, {id: cuid() ,name:'Two Name'}, {id: cuid() ,name: 'thirdName'}];

const Comp = ({title, imgUrl}) => (
    <Tile>
    <div>
      <img className={`${imageStyles}`} src={imgUrl} />
      </div>
    <div className={`deats ${Details}`}>
      <div className="tile__title">
        {title}
      </div>
    </div>
  </Tile>
);

export const RenderComps = ({data}) => data.map(x => {
  const imgSrc = x.images.image[0].src;
  return <Comp key={x.id} title={x.title} imgUrl={x.images.image[0].src} />
});

export { Comp };

export default ({data = names}) => (
    <Wrapper>

  <h1>Pure CSS Netflix Video Carousel</h1>

  <Row>
    <RowContent>
      <RenderComps data={data}/>

    </RowContent>
  </Row>

</Wrapper>
)