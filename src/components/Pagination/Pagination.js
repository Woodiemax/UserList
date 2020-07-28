import React from 'react';

const Pagination = ({
	currentPage,
	userListPerPage,
	totalUserListLangth,
	paginate,
}) => {
	const pageNumbers = [];
	for (
		let i = 1;
		i < Math.ceil(totalUserListLangth / userListPerPage + 1);
		i++
	) {
		let active = currentPage === i ? 'active' : '';
		pageNumbers.push(
			<li key={i} className={`wave-effect ${active}`}>
				<a onClick={() => paginate(i)} className='page-link' href='#!'>
					{i}
				</a>
			</li>
		);
	}
	return <ul className='pagination'>{pageNumbers}</ul>;
};
export default Pagination;
