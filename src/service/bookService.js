import axios from "axios"
import authHeader from "./authHeader"


const API = 'https://ebook4u-server.onrender.com/'

class BookService {

    getAllBook() {
        return axios.get(API + 'api/book/all', { headers: authHeader() })

    }
    // getReport() {
    //     return axios.get(API + 'admin/report/all', { headers: authHeader() })

    // }

}

export default new BookService();