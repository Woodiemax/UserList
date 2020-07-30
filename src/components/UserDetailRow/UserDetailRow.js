import React from 'react';

const UserDetailRow = ({ user }) => {
	return (
		<div>
			<p>
				Выбран пользователь <b>{user.firstName}</b>
			</p>
			<p>
				Описание:
				<textarea value={user.description} />
			</p>
			<p>
				Адрес проживания:
				<b>{(user.address && user.address.streetAddress) || 'Нет данных'}</b>
			</p>
			<p>
				Город: <b>{(user.address && user.address.city) || 'Нет данных'}</b>
			</p>
			<p>
				Провинция/штат:
				<b>{(user.address && user.address.state) || 'Нет данных'}</b>
			</p>
			<p>
				Индекс: <b>{(user.address && user.address.zip) || 'Нет данных'}</b>
			</p>
		</div>
	);
};
export default UserDetailRow;
