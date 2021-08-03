const USERS_REST_API_URL = 'https://jsonplaceholder.typicode.com/users';

class UserServiceFetch{
    getUsers(){
        return fetch(USERS_REST_API_URL,
            {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((res => res.json()));
    }
}

export default new UserServiceFetch();