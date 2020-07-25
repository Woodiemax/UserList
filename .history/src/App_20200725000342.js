import React, { useState, useEffect } from 'react';
import UserData from './api/userDataApi';
import './App.css';
import Table from './components/Table/Table';
import Loader from './components/Loader/Loader';
import SearchPanel from './components/SearchPanel/SearchPanel';

const App = () => {
	const userData = new UserData();

	const [params, SetParams] = useState({
		userList: [],
		loading: false,
		sortType: null,
		arrowColorLeft: null,
		arrowColorRight: null,
		term: 'Le',
	});

	const loadSmallData = async () => {
		SetParams({
			userList: [],
			loading: true,
		});
		const arr = await userData.getSmallData();
		SetParams({
			userList: arr,
			loading: false,
			arrowColorLeft: 'red',
		});
	};

	const loadBigData = async () => {
		SetParams({
			loading: true,
			userList: [],
		});
		const arr = await userData.getBigData();
		SetParams({
			loading: false,
			userList: arr,
			arrowColorRight: 'red',
		});
	};

	const onSort = (field) => {
		console.log(field);
	};

	const onSearching = (term) => {
		SetParams({
			term: term,
			...params,
		});
	};

	const search = (rows,term) => {
		console.log(rows);
		if (term === 0) return rows;

		if (term === 0) return rows;
		return rows.filter(
			(row) => row.name.toLowerCase().indexOf(params.term) > -1
		);
	};

	return (
		<div className='conteiner'>
			<div className='btn-group'>
				<button onClick={loadSmallData} className='btn'>
					Малый объем данных
				</button>
				<p>
					<span className={params.arrowColorLeft}>&#8656;</span> Выберите объем
					данных <span className={params.arrowColorRight}>&#8658;</span>
				</p>
				<button onClick={loadBigData} className='btn'>
					Большой объем данных
				</button>
			</div>
			<SearchPanel onSearching={onSearching} />

			{params.loading ? (
				<Loader />
			) : (
				<Table data={search(params.userList, params.term)} onSort={onSort} />
			)}
		</div>
	);
};

export default App;