import React, { useState } from 'react';

const SearchPanel = ({ onSearching }) => {
	const [term, SetTerm] = useState('');

	const onSearch = (e) => {
		const term = e.target.value;
        SetTerm(term);
        log
		onSearching(term);
	};

	return (
		<input
			type='text'
			value={term}
			className='form-control'
			placeholder='Начните поиск'
			onChange={onSearch}
		/>
	);
};

export default SearchPanel;