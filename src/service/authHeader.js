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

const auth = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzlkNmNlOTFiYTU3MTI4OTdkZDE5MjYiLCJpYXQiOjE2NzE4NTU0MjcsImV4cCI6MTcwMzM5MTQyN30.hpWdcirkiXTiR5WqzjEuoihCbx5mOBjMkr5qVjgj-yY'



