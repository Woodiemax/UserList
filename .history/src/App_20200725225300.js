import React, { useState, useEffect } from 'react';
import UserData from './api/userDataApi';
import './App.css';
import Table from './components/Table/Table';
import Loader from './components/Loader/Loader';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Pagination from './components/Pagiantion/Pagiantion';

const App = () => {
	const userData = new UserData();

	const [params, SetParams] = useState({
		userList: [],
		loading: false,
		sortType: null,
		arrowColorLeft: null,
		arrowColorRight: null,
		term: '',
	});
	const [term, SetTerm] = useState('');
	const [currentPage, SetCurrentPage] = useState(1);
	const [userListPerPage, SetPostsPerPage] = useState(50);

	const loadSmallData = async () => {
		SetParams({
			userList: [],
			loading: true,
		});
		const arr = await userData.getSmallData();
		SetParams({
			userList: arr,
			loading: false,
			arrowColorLeft: 'red',
		});
	};

	const loadBigData = async () => {
		SetParams({
			loading: true,
			userList: [],
		});
		const arr = await userData.getBigData();
		SetParams({
			loading: false,
			userList: arr,
			arrowColorRight: 'red',
		});
	};

	const onSort = (field) => {
		console.log(field);
		SetParams({
			userList: params.userList.sort((a, b) => a[field] > b[field]),
		});

		console.log(params.userList);
	};

	const onSearching = (word) => {
		SetTerm(word);
	};

	function search(rows) {
		const columns = rows[0] && Object.keys(rows[0]);

		if (term.length === 0) return rows;
		return rows.filter((row) => {
			return (
				row.firstName.toString().toLowerCase().indexOf(term.toLowerCase()) > -1
			);
			// columns.some((column) => {
			// 	console.log('row ;', row[column]);
			// 	return (
			// 		row[column].toString().toLowerCase().indexOf(term.toLowerCase()) > -1
			// 	);
			// });
		});
	}

	const indexOfLastUserList = currentPage * userListPerPage;
	const indexofFirstUselList = indexOfLastUserList - userListPerPage;
	const currentPosts = params.userList.slice(
		indexofFirstUselList,
		indexOfLastUserList
	);

	const onPaginate=(page)=>{

	}

	const visiblePosts = search(currentPosts);

	return (
		<div className='conteiner'>
			<div className='btn-group'>
				<button onClick={loadSmallData} className='btn'>
					Малый объем данных
				</button>
				<p>
					<span className={params.arrowColorLeft}>&#8656;</span> Выберите объем
					данных <span className={params.arrowColorRight}>&#8658;</span>
				</p>
				<button onClick={loadBigData} className='btn'>
					Большой объем данных
				</button>
			</div>
			<SearchPanel onSearching={onSearching} />

			{params.loading ? (
				<Loader />
			) : (
				<Table data={visiblePosts} onSort={onSort} />
			)}
			<Pagination
				userListPerPage={userListPerPage}
				totalUserListLangth={params.userList.length}
				paginate={onPaginate}
			/>
		</div>
	);
};

export default App;
