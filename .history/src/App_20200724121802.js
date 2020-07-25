import React, { useState, useEffect } from 'react';
import UserData from './api/userDataApi';
import './App.css';
import Table from './components/Table/Table';

const App = () => {
	const userData = new UserData();

	const [data, SetData] = useState(null);

	const loadSmallData = () => {
		userData.getSmallData().then((items) => {
			const arr = Object.entries(items);

			// arr.map((item) => console.log(Object.keys(item[0])));
			console.log(arr.id);
		});
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
