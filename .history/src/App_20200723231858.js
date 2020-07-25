import React, { useState, useEffect } from 'react';
import UserData from './api/userDataApi';
import './App.css';

const App = () => {
	const userData = new UserData();

	const [data, SetData] = useState(null);

	const loadSmallData = () => {
		userData.getSmallData().then((data) => SetData(...data));
		console.log(typeof data);
	};

	const loadBigData = () => {};

	return (
		<>
			<button onClick={loadSmallData} className='btn'>
				Small
			</button>
			<div className='app'></div>
		</>
	);
};

export default App;
