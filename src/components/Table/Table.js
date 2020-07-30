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
	sortArrow,
	sortField,
	onUserDetailRow
}) => {
	const tHead = ['id', 'firstName', 'lastName', 'email', 'phone'];
	const arrow =
		sortArrow === 'asc' ? (
			<i class='tiny material-icons'>arrow_downward</i>
		) : (
			<i class='tiny material-icons'>arrow_upward</i>
		);
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
												{sortField === headItem ? arrow : null}
											</th>
										);
									})}
							</tr>
						</thead>
						<tbody>
							{data.map((item) => (
								<tr key={item.id + item.phone} onClick={()=>onUserDetailRow(item)}>
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
