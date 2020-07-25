import React from 'react';
import UserData from './api/userDataApi';
import './App.css';

const App = () => {
	const userData = new UserData();

  const users = userData.getSmallData()
  console.log();;
  

	return <div className='app'>Woodie</div>;
};

export default App;
