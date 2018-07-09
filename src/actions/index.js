import ActiveUsersService from '../ActiveUsersService/ActiveUsersService';
import RemovedUsersService from '../RemovedUsersService/RemovedUsersService';
import User from '../models/UserModel'

window.activeUsers = new ActiveUsersService();
window.removedUsers = new RemovedUsersService();

export const GET_USER = 'GET_USER';
export const REGISTER_USER = 'REGISTER_USER';
export function getUser(login, pass) {
    if(window.activeUsers.getUser(login, pass)) {
        let user = window.activeUsers.users[login];
        return {
            type: GET_USER,
            payload: user
        };
    }
    return {
        type: GET_USER,
        payload: {}
    }
}

export function registerUser(name, lastName, login, password) {
    if(!window.activeUsers.users[login]){
        let user = new User(name, lastName, login, password);
        window.activeUsers.addUser(user);
        return {
            type: REGISTER_USER,
            payload: user
        }
    }
    return {
        type: REGISTER_USER,
        payload: {}
    }
}

