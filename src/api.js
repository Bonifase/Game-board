import axios from 'axios';

export default {
    user: {
        login: (credentials) => axios.post('https://web-game-board-api.herokuapp.com/api/auth', { credentials }).then(res => res.data.user),
        signup: user => axios.post('https://web-game-board-api.herokuapp.com/api/users', { user }).then(res => res.data.user),
        confirm: token => axios.post('https://web-game-board-api.herokuapp.com/api/auth/confirmation', { token })
        .then(res => res.data.user),
        resetPasswordRequest: email =>
        axios.post("https://web-game-board-api.herokuapp.com/api/auth/reset_password_request", { email }), 
        validateToken: token => axios.post("/api/auth/validate_token", { token }),
        resetPassword: data => axios.post("/api/auth/reset_password", { data })
  
    }
};   