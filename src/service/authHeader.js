export default function authHeader() {

    const user = JSON.parse(localStorage.getItem('user'));

    // if (user && user.accessToken) {
    if (true) {

        // console.log("ok");
        // return { 'x-access-token': user.accessToken }
        return {
            'content-type': 'application/json',
            'accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzlkNmNlOTFiYTU3MTI4OTdkZDE5MjYiLCJpYXQiOjE2NzIwNDg3NjYsImV4cCI6MTcwMzU4NDc2Nn0.zp8eZuzEUVOXqjI_SPdDOURGgAEVrzWHaT8uCrwXPeE'
        }
    } else {
        return {}
    }

}
const auth = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzlkNmNlOTFiYTU3MTI4OTdkZDE5MjYiLCJpYXQiOjE2NzE4NTU0MjcsImV4cCI6MTcwMzM5MTQyN30.hpWdcirkiXTiR5WqzjEuoihCbx5mOBjMkr5qVjgj-yY'



