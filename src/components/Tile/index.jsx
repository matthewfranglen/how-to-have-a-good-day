import React, { PropTypes } from 'react';

const Tile = props => (
  <div className="tile" style={{ backgroundImage: `url(${props.image})` }}>
    <p className="text">
      {props.text}
    </p>
  </div>
);

Tile.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Tile;
