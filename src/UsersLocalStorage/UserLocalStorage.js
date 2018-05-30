export default class UsersLocalStorage {
    constructor(key) {
        this.key = key;
        if (!(key in localStorage)) {
            let users = {};
            localStorage.setItem(key, JSON.stringify(users));
            this.users = JSON.parse(localStorage.getItem(key));
        }
        else {
            this.users = JSON.parse(localStorage.getItem(key));
        }
    }

    addUser(user) {
        if (!(user.login in this.users)) {
            this.users[user.login] = user;
            localStorage.setItem(this.key, JSON.stringify(this.users));
        };
    }

    removeUser(login) {
        delete this.users[login];
        localStorage.setItem(this.key, JSON.stringify(this.users))
    }

    check(login) {
        if (login in this.users) {
            return true;
        }
        return false;
    }

    getUser(login, pass) {
        let user = this.users[login];
        if (this.check(login) && (pass == user.pass)) {
            return true;
        }
        return false;
    }
}