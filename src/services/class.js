import { fetchWithToken } from "./fetch";

export const getClassesStudent = async() => {
    const resp = await fetchWithToken('students/get-student-classes');
    const body = await resp.json();
    // console.log(body);
    if(resp.status === 200) {
        return body;
    } else {
        
        return body;
    }
}

export const postEnrrollClass = async(unique_identifier) => {
    const resp = await fetchWithToken('students/register-in-class',{unique_identifier},'POST');
    const body = await resp.json();
    // console.log(body);
    if(resp.status === 200) {
        return body;
    } else {
        
        return body;
    }
}

export const getWorkFlowClass = async(id) => {
    const resp = await fetchWithToken(`classes/get-workflow/${id}`);
    const body = await resp.json();
    // console.log(resp);
    if(resp.status === 200) {
        return body;
    } else {
        
        return body;
    }
}

export const getIntegrantsClass = async(id) => {
    const resp = await fetchWithToken(`classes/get-integrants-class/${id}`);
    const body = await resp.json();
    // console.log(resp);
    if(resp.status === 200) {
        return body;
    } else {
        
        return body;
    }
}