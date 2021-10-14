import { fetchWithToken } from "./fetch";

export const getOrgs = async () => {
    const resp = await fetchWithToken('organizations');
    const body = await resp.json();
    if(resp.status === 200) {
        return body;
    } else {
        return body;
    }
}

export const getProfileData = async() => {
    const resp = await fetchWithToken('students/get-profile');
    const body = await resp.json();
    if(resp.status === 200) {
        return body;
    } else {
        return body;
    }
}

export const completeProfile = async(biography, image, name_org) => {
    const resp = await fetchWithToken('students/complete-info', {biography, image, name_org}, 'POST');
    const body = await resp.json();
    console.log(body);
    if(resp.status === 200) {
        return body;
    } else {
        return body;
    }
}