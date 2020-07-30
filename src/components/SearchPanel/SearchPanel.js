import React, { useState } from 'react';

const SearchPanel = ({ onSearching, data }) => {
	const [term, setTerm] = useState('');
	const [searchebleData, setSearchebleData] = useState([]);

	const onSearch = (word) => {
		setTerm(word);
	};

	const disable = (data && data.length) || term.length ? false : true;

	const search = (rows) => {
		const columns = rows[0] && Object.keys(rows[0]);
		if (term.length === 0) return rows;
		const a = rows.filter((row) => {
			return columns.some((column) => {
				return (
					row[column].toString().toLowerCase().indexOf(term.toLowerCase()) > -1
				);
			});
		});
		return a;
	};

	const onHandleSubmit = (e) => {
		e.preventDefault();
		onSearching(search(data));
	};

	return (
		<form onSubmit={onHandleSubmit}>
			<input
				disabled={disable}
				type='text'
				className='form-control'
				placeholder={disable ? 'Выберите данные' : 'Начните поиск'}
				onChange={(e) => {
					// onSearching(e.target.value);
					onSearch(e.target.value);
				}}
			/>
			<button
				disabled={disable}
				className=' btn waves-effect waves-light'
				type='submit'
				name='action'>
				Search
				<i className=' material-icons right'>search</i>
			</button>
		</form>
	);
};

export default SearchPanel;
