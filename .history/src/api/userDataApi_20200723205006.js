class UserData {

    _apiBaseBefore = 'http://www.filltext.com/?rows='
    _apiBaseAfter = '&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

    async getUserData (url){
        const res = await fetch (`${this._apiBaseBefore}${url}`)


    }


}