import React, { useState, useEffect } from 'react';
import UserData from './api/userDataApi';
import './App.css';
import Table from './components/Table/Table';

const App = () => {
	const userData = new UserData();

	const [data, SetData] = useState([]);

	const loadSmallData = async () => {
		const arr = await userData.getSmallData();
		SetData(arr)
	};

	const loadBigData = () => {};

	return (
		<div className='conteiner'>
			<button onClick={loadSmallData} className='btn'>
				Small
			</button>
			<div className='app'>{typeof data}</div>
			<Table data />
		</div>
	);
};

export default App;
