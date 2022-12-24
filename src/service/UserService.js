import axios from "axios"
import authHeader from "./authHeader"


const API = 'https://ebook4u-server.onrender.com/'

class UserService {

    getAllAccount() {
        return axios.get(API + 'api/user/all', { headers: authHeader() })

    }
    getReport() {
        return axios.get(API + 'admin/report/all', { headers: authHeader() })

    }

    getProfileUser(){
        return axios.get(API + 'user/me', { headers: authHeader() })
    }

    getFavBook(){
        return axios.get(API + 'user/me/favorite-book', { headers: authHeader() })
    }
    
}

export default new UserService();