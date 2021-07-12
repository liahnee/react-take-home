import React from 'react';
import Preview from './mediaPreview';
import MButton from './mediaButton';

const MediaList = (props) => {
  
	const { cover, download, type, tracking, name } = props;
	return (
		<div className="media">
			<Preview cover={cover} type={type} name={name}/>
			<div className="media-button-container">
				{<MButton link={tracking} type="tracking" />}
				{<MButton link={download} type="download" />}
			</div>
		</div>
	);
};

export default MediaList;
