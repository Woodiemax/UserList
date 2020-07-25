import React from 'react';

const Pagiantion = ({ userListPerPage, totalUserListLangth }) => {
	const pageNumbers = [];

	for (i = 1; i < Math.cell(totalUserListLangth / userListPerPage); i++){
        pageNumbers.push(i)
    }
		return <ul className='pagination'>
            {pageNumbers.map(page=>{
                <li></li>
            })}
        </ul> ;
};
export default Pagiantion;
