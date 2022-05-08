import React from 'react';
import PropTypes from 'prop-types';

function VideoFilesEmbed({ embedId }) {
  return (
    <div className='video-responsive'>
      <iframe
        width='355'
        height='200'
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder='0'
        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  );
}

VideoFilesEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default VideoFilesEmbed;
