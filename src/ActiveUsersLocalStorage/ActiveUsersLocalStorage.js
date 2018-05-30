import UsersLocalStorage from '../UsersLocalStorage/UserLocalStorage';

export default class ActiveUsersLocalStorage extends UsersLocalStorage {
    constructor() {
        super("active")
    }
}
