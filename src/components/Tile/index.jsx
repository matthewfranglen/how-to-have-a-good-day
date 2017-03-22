import React, { PropTypes } from 'react';

const Tile = props => (
  <img src={props.image} alt={props.text} className="tile" />
);

Tile.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Tile;
