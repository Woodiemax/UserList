import React from 'react';

import './Table.css';
import Loader from '../Loader/Loader';

const Table = ({ data, onSort }) => {
	const tHead = ['id', 'firstName', 'lastName', 'email', 'phone'];
	console.log(data);
	return (
		<>
			{data && data.length ? (
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
						{data.map((item, i) => (
							<tr key={item.id + item.phone}>
								<td>{item.id}</td>
								<td>{item.firs}</td>
								<td>{item.lastName}</td>
								<td>{item.email}</td>
								<td>{item.phone}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				''
			)}
		</>
	);
};
export default Table;
