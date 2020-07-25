import React, { useState, useEffect } from 'react';
import UserData from './api/userDataApi';
import './App.css';
import Table from './components/Table/Table';

const App = () => {
	const userData = new UserData();

	const [params, SetParams] = useState({
		data: [],
		loading: true,
	});

	const loadSmallData = async () => {
		const arr = await userData.getSmallData();
		SetParams({
			data: arr,
			loading: false,
		});
	};

	const loadBigData = async () => {
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
					Small
				</button>
				<button onClick={loadBigData} className='btn'>
					Big
				</button>
			</div>
			{params.loading}
		</div>
	);
};

export default App;
