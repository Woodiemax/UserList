import React, { useState } from 'react';
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
	});

	const loadSmallData = async () => {
		SetParams({
			userList: [],
			loading: true,
			// ...params,
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
			<SearchPanel />
			<Table data={params.userList} onSort={onSort}isLoading={params.l} />
		</div>
	);
};

export default App;
