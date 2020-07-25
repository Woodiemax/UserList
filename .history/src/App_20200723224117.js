import React, { useState, useEffect } from 'react';
import UserData from './api/userDataApi';
import './App.css';

const App = () => {
	const userData = new UserData();

	const users = userData.getSmallData();

	const [data, SetData] = useState(null);

	const loadSmallData = () => {
		console.log(123);
		users.getSmallData().then((data) => console.log(data));
	};

	const loadBigData = () => {};

	return (
		<>
			<button onClick={loadSmallData} className='btn'>
				Small
			</button>
			{/* <div className='app'>{data}</div> */}
		</>
	);
};

export default App;
