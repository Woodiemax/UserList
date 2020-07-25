class UserData {

    _apiBaseBefore = 'http://www.filltext.com/?rows='
    _apiBaseAfter = '&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

    async getUserData (){
        const res = await fetch (`${}`)
    }


	smallData =
		'32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

	bigData =
		'1000&id={number|1000}&firstName={firstName}&delay=3';
}
