import React from 'react';

import './Table.css';
import AddUser from '../AddUser/AddUser';

const Table = ({
	data,
	onSort,
	userAddInputs,
	showForm,
	onAddUser,
	SetParams,
	deleteUsers,
}) => {
	const tHead = ['id', 'firstName', 'lastName', 'email', 'phone'];
	return (
		<>
			{data && data.length ? (
				<>
					{userAddInputs ? (
						<button onClick={showForm} className='btn right'>
							Добавить пользователя
						</button>
					) : (
						<AddUser
							items={tHead}
							onAddUser={onAddUser}
							SetParams={SetParams}
						/>
					)}
					<table className='highlight centered tbl'>
						<thead>
							<tr>
								{data &&
									tHead.map((headItem) => {
										return (
											<th key={headItem} onClick={() => onSort(headItem)}>
												{headItem}
											</th>
										);
									})}
							</tr>
						</thead>
						<tbody>
							{data.map((item) => (
								<tr key={item.id + item.phone}>
									<td>{item.id}</td>
									<td>{item.firstName}</td>
									<td>{item.lastName}</td>
									<td>{item.email}</td>
									<td>{item.phone}</td>
									<td>
										<button 
											className='waves-effect waves-light btn'
											onClick={() => deleteUsers(item.id)}>
											<i className='material-icons'>delete</i>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</>
			) : (
				''
			)}
		</>
	);
};
export default Table;
