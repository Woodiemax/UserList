import React from 'react';

const Pagiantion = ({ userListPerPage, totalUserListLangth }) => {
	const pageNumbers = [];

	for (let i = 1; i < Math.ceil(totalUserListLangth / userListPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
        <nav>

        </nav>
		
	);
};
export default Pagiantion;
