import React from 'react';
import Loader from '../Loader/Loader';

const Table = (props) => {
	return (
		<>
			<Loader />
			<table className='responsive-table'>
				<thead>
					<tr>
						<th>id</th>
						<th>firstName</th>
						<th>lastPrice</th>
						<th></th>
						<th>Item Price</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Alvin</td>
						<td>Eclair</td>
						<td>$0.87</td>
					</tr>
					<tr>
						<td>Alan</td>
						<td>Jellybean</td>
						<td>$3.76</td>
					</tr>
					<tr>
						<td>Jonathan</td>
						<td>Lollipop</td>
						<td>$7.00</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};
export default Table;
