import React from 'react';
import Proptypes from 'prop-types';

const AudioPlayer = ({ url, classname, controls }) => {
  return <audio className={classname} src={url} controls={controls} />;
};

AudioPlayer.defaultProps = {
  classname: '',
  controls: '',
};

AudioPlayer.propTypes = {
  url: Proptypes.string.isRequired,
  classname: Proptypes.string,
  controls: Proptypes.string,
};

export default AudioPlayer;
