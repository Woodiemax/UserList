import React, { useState } from 'react';
import UserData from './api/userDataApi';
import './App.css';
import Table from './components/Table/Table';
import Loader from './components/Loader/Loader';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Pagination from './components/Pagination/Pagination';

const App = () => {
	const userData = new UserData();

	const [params, SetParams] = useState({
		userList: [],
		loading: false,
		sortType: 'asc',
		arrowColorLeft: null,
		arrowColorRight: null,
		term: '',
	});
	const [term, SetTerm] = useState('');
	const [currentPage, SetCurrentPage] = useState(1);
	const [userListPerPage, SetUserListPerPage] = useState(50);
	const [userAddInputs, SetuserAddInputs] = useState(true);

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
		let sortedArr = [];
		params.sortType === 'asc'
			? (sortedArr = params.userList.sort((a, b) =>
					b[field] > a[field] ? 1 : -1
			  ))
			: (sortedArr = params.userList.sort((a, b) =>
					a[field] > b[field] ? 1 : -1
			  ));

		SetParams({
			...params,
			userList: sortedArr,
			sortType: params.sortType === 'asc' ? 'desc' : 'asc',
		});
	};

	const onSearching = (word) => {
		SetTerm(word);
	};

	const search = (rows) => {
		const columns = rows[0] && Object.keys(rows[0]);
		if (term.length === 0) return rows;
		const a = rows.filter((row) => {
			return columns.some((column) => {
				return (
					row[column].toString().toLowerCase().indexOf(term.toLowerCase()) > -1
				);
			});
		});
		console.log(a);
		return a;
	};

	const indexOfLastUserList = currentPage * userListPerPage;
	const indexofFirstUselList = indexOfLastUserList - userListPerPage;
	const currentUsersList = params.userList.slice(
		indexofFirstUselList,
		indexOfLastUserList
	);

	const onPaginate = (page) => {
		SetCurrentPage(page);
	};

	const showForm = () => SetuserAddInputs(false);

	const onAddUser = (item) => {
		const users = params.userList;
		SetParams({
			...params,
			userList: [item, ...users],
		});
	};

	const deleteUsers = (id) => {
		const idx = params.userList.findIndex((el) => el.id === id);
		SetParams({
			...params,
			userList: [
				...params.userList.slice(0, idx),
				...params.userList.slice(idx + 1),
			],
		});
	};

	const visiblePosts = search(currentUsersList);

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
			<select>
				<option>123</option>
			</select>
			{params.loading ? (
				<Loader />
			) : (
				<>
					<Table
						data={visiblePosts}
						onSort={onSort}
						userAddInputs={userAddInputs}
						showForm={showForm}
						onAddUser={onAddUser}
						SetParams={SetParams}
						deleteUsers={deleteUsers}
					/>
				</>
			)}
			{params.userList.length > userListPerPage ? (
				<Pagination
					userListPerPage={userListPerPage}
					totalUserListLangth={params.userList.length}
					paginate={onPaginate}
					currentPage={currentPage}
				/>
			) : (
				''
			)}
		</div>
	);
};

export default App;
