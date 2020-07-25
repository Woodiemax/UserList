import React from 'react';

import './Table.css';

const Table = ({ data ,onSort}) => {

    const tHead = ['id','firstName','lastName',"email",]


	return (
		<>
			<table className='highlight centered tbl'>
				<thead>
					<tr>
						<th onClick={onSort}>id</th>
						<th>firstName</th> 
						<th>lastName</th>
						<th>email</th>
						<th>phone</th>
					</tr>
				</thead>

				<tbody>
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