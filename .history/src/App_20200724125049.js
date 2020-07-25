import React, { useState, useEffect } from 'react';
import UserData from './api/userDataApi';
import './App.css';
import Table from './components/Table/Table';

const App = () => {
	const userData = new UserData();

	const [params, SetParams] = useState({
		data:[]
		loadinf
	});

	const loadSmallData = async () => {
		const arr = await userData.getSmallData();
		SetData(arr);
	};

	const loadBigData = async () => {
		const arr = await userData.getBigData();
		SetData(arr);
	};

	return (
		<div className='conteiner'>
			<button onClick={loadSmallData} className='btn'>
				Small
			</button>
			<button onClick={loadBigData} className='btn'>
				Big
			</button>
			<div className='app'>{typeof data}</div>
			<Table data={data} />
		</div>
	);
};

export default App;
