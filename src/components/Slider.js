import React from 'react';
import { Tile, imageStyles, Details } from '../shared/styled';
import PropTypes from 'prop-types';
const { string } = PropTypes;

const Movie = ({title, imgUrl}) => (
  <Tile className="tile">
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

Movie.propTypes = {
  title: string,
  imgUrl: string
};

const RenderComps = ({data}) => data.map(x =>
  <Movie key={x.id} title={x.title} imgUrl={x.images.image[0].src} />);

RenderComps.propTypes = {
  data: PropTypes.array
};

export default RenderComps;
