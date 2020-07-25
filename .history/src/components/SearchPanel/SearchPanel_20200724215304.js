import React, { useState } from 'react';

const SearchPanel = ({}) => {
	const [term, SetTerm] = useState('');

	const onSearch = (e) => {
		const term = e.target.value;
		SetTerm(term);
		onSearch(term);
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
