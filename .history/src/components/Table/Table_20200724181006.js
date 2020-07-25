import React from 'react';

import './Table.css';
import Loader from '../Loader/Loader';

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

				<tbody>

{
    isLoading ? <Loader/>
}

					
				</tbody>
			</table>
		</>
	);
};
export default Table;
