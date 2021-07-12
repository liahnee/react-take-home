import React from 'react';
import {FontAwesomeIcon } from '@fortawesome/fontawesome-free'

const MButton = (props) => {
	const { type, link } = props;
	const icon = () => {
		if (type == 'tracking') {
			return '';
		} else {
			return 'download-alt';
		}
	};

	return (
		<div className={`button-${type} media-button`}>
			<a href={`${link}`}>
        {type}
			</a>
		</div>
	);
};
export default MButton;
