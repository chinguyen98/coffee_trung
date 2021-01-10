import axios from 'axios'
const backendUrl = 'http://127.0.0.1:8000/api';
class userService {
    signUp(data) {
        return axios({
            method: "POST",
            url: `${backendUrl}/register`,
            data
        })
    }
    signIn(user) {
        return axios({
            method: "POST",
            url: `${backendUrl}/login`,
            data: user
        })
    }
}
export default userService;