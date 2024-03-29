import {fetchWithToken} from './fetch';

export const getClassByTeacher = async () => {
    const resp = await fetchWithToken('classes/get-classes-by-teacherid');
    const body = await resp.json();
    if(resp.status === 200) {
        return body;
    } else {
        return body;
    }
}

export const createClass = async (name, quota, description, color) => {
    const resp = await fetchWithToken('classes/create-class', {name, quota, description, color}, 'POST');
    const body = await resp.json();
    if(resp.status === 200) {
        return body;
    } else {
        return body;
    }
}