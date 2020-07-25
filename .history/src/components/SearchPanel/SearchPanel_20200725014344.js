import React, { useState } from 'react';

const SearchPanel = ({ onSearching }) => {
	const [term, SetTerm] = useState('');

	return (
		<input
			type='text'
			value={term}
			className='form-control'
			placeholder='Начните поиск'
			onChange={(e) => {
				SetTerm(e.target.value);
				onSearching(term );
			}}
		/>
	);
};

export default SearchPanel;
