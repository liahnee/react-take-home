import React from 'react';
import '../css/campaign/header.css';

const CampaignHeader = (props) => {
	const { name, icon, pay } = props;

	return (
		<header className="campaign-header">
			<img src={icon} alt={`${name} icon`} />
			<span>
				<h1 className="campaign-name bold"> {name} </h1>
				<p className="campaign-payment"><span className="bold">{pay}</span>&nbsp;per install</p>
			</span>
		</header>
	);
};

export default CampaignHeader;
