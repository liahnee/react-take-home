import React, { useEffect, useState } from 'react';
import Campaign from './campaign';

const CampaignList = (props) => {
	const [ mediaData, setMediaData ] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			await fetch('https://www.plugco.in/public/take_home_sample_feed')
				.then((resp) => resp.json())
				.then((data) => {
					setMediaData([data.campaigns[0]]);
					console.log(data);
				})
				.catch((err) => console.log(err));
		};
		fetchData();
		return () => {
			setMediaData(null);
		};
	}, []);

	const mapMedia = (data) => {
		console.log("mappedmedia")
		const mappedMedia = data.map((data) => {
			return <Campaign key={data.id} data={data} />;
		});
		return mappedMedia;
	};
	return (
		<div className="media-list">
			{mediaData != null ? mapMedia(mediaData) : null}
			<div />
		</div>
	);
};

export default CampaignList;
