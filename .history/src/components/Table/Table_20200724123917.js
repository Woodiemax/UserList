import React from 'react';
import Loader from '../Loader/Loader';
import './Table.css'

const Table = ({data}) => {
    
	return (
		<>
			<Loader />
			<table className='highlight centered tbl'>
				<thead>
					<tr>
						<th>id</th>
						<th>firstName</th>
						<th>lastName</th>
						<th>email</th>
						<th>phone</th>
					</tr>
				</thead>

				<tbody>
				{data.map(item=>console.log();)}
				</tbody>
			</table>
		</>
	);
};
export default Table;
