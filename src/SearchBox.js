import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
	return (
	<div className = 'pa2'>
		<input
			className = 'tc pa3 ba b--green bg-lightest-blue' 
			type = 'search' 
			placeholder = 'Search Local Food'
			onChange = {searchChange}
			/>
	{console.log(searchChange)}
	</div>
	);
}

export default SearchBox;