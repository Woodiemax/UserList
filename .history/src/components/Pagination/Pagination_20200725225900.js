import React from 'react';

const Pagination = ({ userListPerPage, totalUserListLangth, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i < Math.ceil(totalUserListLangth / userListPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<ul className='pagination'>
			{pageNumbers.map((page) => (
				<li key={page} className='waves-effect'>
					<a onClick={() => paginate(page)} className='page-link' href='#!'>
						{page}
					</a>
				</li>
			))}
		</ul>
	);
};
export default Pagination;
