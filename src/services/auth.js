import {fetchWithoutToken, fetchWithToken} from './fetch';


export const startLogin =  async (email, password) => {
    const resp = await fetchWithoutToken('users/login', {email, password}, 'POST');
    const body = await resp.json();
    if(resp.status === 200) {
        return body;
    } else {
        return body;
    }
}

export const startRegister =  async (name_user, lastname, nickname, email, password_, repeat_password, role) => {
    const resp = await fetchWithoutToken('users', {name_user, lastname, nickname, email, password_, repeat_password, role}, 'POST');
    const body = await resp.json();
    if(resp.status === 200) {
        return body;
    } else {
        return body;
    }
}

export const startChecking = async () => {
    const resp = await fetchWithToken('users/renew');
    const body = await resp.json();
    if(resp.status === 200) {
        return body;
    } else {
        return body;
    }
}