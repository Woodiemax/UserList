import React, { useState, useEffect } from 'react';
import UserData from './api/userDataApi';
import './App.css';

const App = () => {
	const userData = new UserData();

  const users = userData.getSmallData();
  
  const [data,]

	const loadSmallData = () => {};

	const loadBigData = () => {};

	return <div className='app'>Woodie</div>;
};

export default App;
