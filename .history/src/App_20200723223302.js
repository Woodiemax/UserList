import React, { useState, useEffect } from 'react';
import UserData from './api/userDataApi';
import './App.css';

const App = () => {
	const userData = new UserData();

	const users = userData.getSmallData();

	const [data, SetData] = useState(null);

	const loadSmallData = () => {
		users.getSmallData().then((data) => SetData(data));
	};

	const loadBigData = () => {};

	return (
		<>
			<button class='btn'>
				Notification <span className='badge badge-primary'>Click</span>
			</button>
			<div className='app'>{data}</div>
		</>
	);
};

export default App;