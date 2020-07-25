import React from 'react';

const Pagiantion = ({ userListPerPage, totalUserListLangth }) => {
	const pageNumbers = [];

	for (let i = 1; i < Math.ceil(totalUserListLangth / userListPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<ul className='pagination'>
			{pageNumbers.map((page) => (
				<li key={page} className='page-item'>
					<a href='#!'>{page}</a>
				</li>
			))}
		</ul>
	);
};
export default Pagiantion;
