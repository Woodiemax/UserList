import React, { useState, useEffect } from 'react';
import UserData from './api/userDataApi';
import './App.css';
import Table from './components/Table/Table';
import Loader from './components/Loader/Loader';

const App = () => {
	const userData = new UserData();

	const [params, SetParams] = useState({
		data: [],
		loading: false,
	});

	const loadSmallData = async () => {
		SetParams({
			loading: true,
			data: [],
		});
		const arr = await userData.getSmallData();
		SetParams({
			data: arr,
			loading: false,
		});
	};

	const loadBigData = async () => {
		SetParams({
			loading: true,
			data: [],
		});
		const arr = await userData.getBigData();
		SetParams({
			data: arr,
			loading: false,
		});
	};

	return (
		<div className='conteiner'>
			<div className='btn-group'>
				<button onClick={loadSmallData} className='btn'>
					Малый объем данных
				</button>
				<p> &#8656;    Выберите объем данных &#8658; </p>
				<button onClick={loadBigData} className='btn'>
					Большой объем данных
				</button>
			</div>
			{params.loading ? <Loader /> : <Table data={params.data} />}
		</div>
	);
};

export default App;
