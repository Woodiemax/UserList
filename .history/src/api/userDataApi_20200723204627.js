class UserData {

    _apiBase = 'http://www.filltext.com/?rows='

    async getUserData (){
        const res = await fetch (`${}`)
    }


	smallData =
		'32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

	bigData =
		'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
}
