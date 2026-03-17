export class User {
    constructor(id, username, password, email, user_type, last_login= null){
        this.id=id
        this.username = username
        this.password = password
        this.email = email
        this.user_type = user_type
        this.last_login =last_login
    }
}