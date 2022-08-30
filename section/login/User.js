class User {
	user_id = '';
	username = '';
	email = '';
	password = '';
	api_url = 'https://63048a5e761a3bce77e9e64c.mockapi.io';


	create() {
		let data = {
			username: this.username,
			email: this.email,
			password: this,password
		}

		console.log(data);
	}
}