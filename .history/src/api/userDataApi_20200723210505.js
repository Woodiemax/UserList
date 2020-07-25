class UserData {
	_apiBaseBefore = 'http://www.filltext.com/?rows=';
	_apiBaseAfter =
		'&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

	async getUserData(url) {
		const res = await fetch(
			// `${this._apiBaseBefore}${url}${this._apiBaseAfter}`
			`${url}`
		);

		if (!res.ok) {
			throw new Error('Что-то пошло не так! Проверьте данные!');
		}
		return await res.json();
	}

	getSmallData() {
		return this.getUserData(
			' http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
		);
	}

	getBigData() {
		return this.getUserData(
			'1000&id={number|1000}&firstName={firstName}&delay=3'
		);
	}
}

const p = new UserData();

p.getSmallData().then((body) => console.log(body));
