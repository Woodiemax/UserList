import React, { useState } from 'react';
import UserData from './api/userDataApi';
import './App.css';
import Table from './components/Table/Table';
import Loader from './components/Loader/Loader';

const App = () => {
	const userData = new UserData();

	const [params, SetParams] = useState({
		data: [],
		loading: false,
		sortType: 'asc',
	});

	const loadSmallData = async () => {
		SetParams({
			userList: [],
			loading: true,
			...params,
		});
		const arr = await userData.getSmallData();
		SetParams({
			userList: arr,
			loading: false,
		});
	};

	const loadBigData = async () => {
		SetParams({
			loading: true,
			userList: [],
			...params,
		});
		const arr = await userData.getBigData();
		SetParams({
			loading: false,
			userList: arr,
			...params,
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
				<p> &#8656; Выберите объем данных &#8658; </p>
				<button onClick={loadBigData} className='btn'>
					Большой объем данных
				</button>
			</div>
			{params.loading ? (
				<Loader />
			) : (
				<Table data={params.userList} onSort={onSort} />
			)}
		</div>
	);
};

export default App;
