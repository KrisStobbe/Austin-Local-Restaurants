import React from 'react';

/*Importing the Correct Photo to Use*/
import one from './photos/1.jpeg';

const Card = (props) => {
	const {name, cost, Description } = props;
	return ( 
	<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		{/* Image for each Restaurant that I use */}
		<img alt = 'Food' src = {one} />
			<div>
				<h2>{name}</h2>
				<p>{cost}</p>
				<p>{Description}</p>
			</div>
	</div>
	);
}

export default Card; 