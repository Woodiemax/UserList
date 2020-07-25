import React from 'react';

import './Table.css';
import Loader from '../Loader/Loader';

const Table = ({ data, onSort }) => {
	const tHead = ['id', 'firstName', 'lastName', 'email', 'phone'];

	return (
		<>
			{data ? (
				<table className='highlight centered tbl'>
					<thead>
						<tr>
							{data &&
								tHead.map((headItem) => {
									console.log(data);
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
								<td>{item.name}</td>
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
