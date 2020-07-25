import React from 'react';
import UserData from './api/userDataApi';
import './App.css';

const App = () => {
	const userData = new UserData();

	const users = userData().getSma.then((body) => console.log(body));

	return <div className='app'>Woodie</div>;
};

export default App;
