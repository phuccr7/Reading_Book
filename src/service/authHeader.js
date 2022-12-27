export default function authHeader() {


    const user = localStorage.getItem('user');

    if (user) {
        // if (true) {

        // console.log("ok");
        // return { 'x-access-token': user.accessToken }
        return {
            'content-type': 'application/json',
            'accept': 'application/json',
            'Authorization': `Bearer ${user}`
        }
    } else {
        return {}
    }

}

export const jwt = () => {

    let token = localStorage.getItem('user');
    if (!token) return "{}"
    else return 'Bearer ' + token;
}
export const logout = () => {

    localStorage.removeItem("user");

    // let token = localStorage.getItem('user');
    // if (!token) return {}
    // else return 'Bearer ' + token;
}



