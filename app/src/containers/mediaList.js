import React, { useEffect, useState } from 'react';

const MediaList = (props) => {
	const [ mediaData, setMediaData] = useState(null)
	

	useEffect(() => {
		const fetchData = async () => {
			fetch('https://www.plugco.in/public/take_home_sample_feed')
				.then( resp => resp.json() )
				.then( data => console.log(data) )
				.catch( err => console.log(err) )
		}
		fetchData();
		return () => {
			setMediaData(null)
		}
	}, [])


	const mapMedia = (props) => {};
	return (
		
		<div className="media-list">
			<div />
		</div>
	);
};

export default MediaList;
