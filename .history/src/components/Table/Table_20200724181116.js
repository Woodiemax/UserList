import React from 'react';

import './Table.css';

const Table = ({ data, onSort, isLoading }) => {
	const tHead = ['id', 'firstName', 'lastName', 'email', 'phone'];

	return (
		<>
			<table className='highlight centered tbl'>
				<thead>
					<tr>
						{tHead.map((headItem) => (
							<th key={headItem} onClick={() => onSort(headItem)}>
								{headItem}
							</th>
						))}
					</tr>
				</thead>
				{isLoading ? 
				<Loader />
				}<tbody>
					{data.map((item, i) => (
						<tr key={item.id + item.phone}>
							<td>{item.id}</td>
							<td>{item.firstName}</td>
							<td>{item.lastName}</td>
							<td>{item.email}</td>
							<td>{item.phone}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};
export default Table;
