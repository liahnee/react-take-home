import React from 'react';
import Media from '../components/media';
import '../css/campaign/media.css';

const MediaList = (props) => {

  const { medias, name } = props;
  const mapMedia = datas => {
    const medias = datas.map( media => {
      const { cover_photo_url, download_url, media_type, tracking_link} = media;
      return <Media cover={cover_photo_url} download={download_url} type={media_type} tracking={tracking_link} name={name} />
    })
    return medias;
  }

	return (
		<div className="media-list">
      {mapMedia(medias)}
		</div>
	);
};

export default MediaList;
