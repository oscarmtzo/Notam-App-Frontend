import axios from 'axios'

const baseURL = 'http://localhost:3000'
//const baseURL = 'http://notam-app.herokuapp.com/api'

class AuthService {
    constructor(){
        this.service = axios.create({
            baseURL, 
            withCredentials: true
        })
    }
    signup(data){
        return this.service.post('/api/signup', data)
    }
    login(data){
        return this.service.post('/api/login', data)
    }
    logout(data){
        return this.service.get('/api/logout')
    }
}
export default AuthService