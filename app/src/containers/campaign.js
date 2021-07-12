import React from 'react';
import CampaignHeader from '../components/campaignHeader';
import MediaList from './mediaList';

const Campaign = (props) => {
	const { campaign_name, campaign_icon_url, medias, pay_per_install } = props.data;

	console.log('medias in campaigns ', medias);
	return (
		<div className="campaign">
			<CampaignHeader name={campaign_name} icon={campaign_icon_url} pay={pay_per_install} />
			<MediaList medias={medias} name={campaign_name} />
		</div>
	);
};

export default Campaign;
