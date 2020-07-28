import React, { useState } from 'react';

import M from 'materialize-css/js/..';
import './AddUser.css';

const AddUser = ({ items, onAddUser }) => {
	const [addUser, setaddUser] = useState('');

	useState(() => {
		M.updateTextFields();
	}, []);
	const handleSubmit = (e) => {
		e.preventDefault();
		onAddUser(addUser);
	};
	const changes = (e) => {
		setaddUser({
			...addUser,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className='row'>
			<form className='col s12' onSubmit={handleSubmit}>
				<div className='row inp'>
					{items.map((item) => (
						<div key={item} className='input-field inputs-item'>
							<input
								onChange={changes}
								type='text'
								name={item}
								className='validate'
							/>
							<label htmlFor='name'>{item}</label>
                            
						</div>
					))}
				</div>
				<input type='submit' value='Добавить пользователя' />
			</form>
		</div>
	);
};

export default AddUser;
