import UsersLocalStorage from '../UsersLocalStorage/UserLocalStorage';

export default class RemovedUsersLocalStorage extends UsersLocalStorage {
    constructor() {
        super("removed")
    }
}