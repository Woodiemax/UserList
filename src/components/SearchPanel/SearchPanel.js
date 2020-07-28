import React  from 'react';

const SearchPanel = ({ onSearching }) => {
	return (
		<input
			type='text'
			className='form-control'
			placeholder='Начните поиск'
			onChange={(e) => {
				onSearching(e.target.value);
			}}
		/>
	);
};

export default SearchPanel;
