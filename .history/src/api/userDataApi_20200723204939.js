class UserData {

    _apiBaseBefore = 'http://www.filltext.com/?rows='
    _apiBaseAfter = '&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

    async getUserData (url){
        const res = await fetch (`${this._apiBaseBefore}${}`)
    }


	smallData =
		'32&id={number|1000}&firstName={firstName}';

	bigData =
		'1000&id={number|1000}&firstName={firstName}&delay=3';
}