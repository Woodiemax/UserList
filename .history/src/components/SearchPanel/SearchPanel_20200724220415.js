import React, { useState } from 'react';

const SearchPanel = ({ onSearching }) => {
	const [term, SetTerm] = useState('');

	// const onSearch = (e) => {
	// 	const term = e.target.value;
	// 	SetTerm(term);
	// 	console.log(term);
	// 	onSearching(term);
	// };

	return (
		<input
			type='text'
			value={term}
			className='form-control'
			placeholder='Начните поиск'
			onChange={e=> Se}
		/>
	);
};

export default SearchPanel;