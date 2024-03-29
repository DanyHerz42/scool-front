const baseUrl = 'https://scool-server.herokuapp.com';

const fetchWithoutToken = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;

    if(method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}

const fetchWithToken = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || null;
    
    if(method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'token': token
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'token': token
            },
            body: JSON.stringify(data)
        })
    }
}
export {
    fetchWithoutToken,
    fetchWithToken
}