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
		SetData(arr);
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
			<div >
				<button onClick={loadSmallData} className='btn'>
					Small
				</button>
				<button onClick={loadBigData} className='btn'>
					Big
				</button>
			</div>
			<Table data={data} />
		</div>
	);
};

export default App;
