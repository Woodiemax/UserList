import React from 'react';

import './Table.css';

const Table = ({ data ,onSort}) => {

    const tHead = ['id','firstName','lastName',"email",'phone']


	return (
		<>
			<table className='highlight centered tbl'>
				<thead>
					<tr>
						{tHead.map(headItem=>)}
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
