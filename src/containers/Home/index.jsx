import React, { PropTypes } from 'react';
import Tile from '../../components/Tile';

const Home = props => (
  <Tile image={props.image} text={props.text} />
);

Home.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Home;
