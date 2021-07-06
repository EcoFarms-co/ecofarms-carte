const axios = require('axios');
const config = require('../middleware/config')

exports.login = (body, token, callback) => {
    axios.post(config.url+'/api/users/login', body)
    .then(function (response) {
        if (response.status === 200){
            callback(undefined, response.data.token);
        }else{
            callback('Une erreur est survenue. Veillez rééssayer', undefined);
        }
    })
    .catch(function (error) {
        // handle error
        throw new Error(error)
    });
}

exports.logout = (token, callback) => {
    axios.post(config.url+'/api/users/logout', '')
    .then(function (response) {
        if (response.status === 200){
            callback(undefined);
        }else{
            callback('Une erreur est survenue. Veillez rééssayer');
        }
    })
    .catch(function (error) {
        // handle error
        throw new Error(error)
    });
}

// exports.logout = (callback) => {
//     // localStorage.removeItem('token')
//     // localStorage.removeItem('userId')
//     if (!localStorage.getItem(token) && !localStorage.getItem("userId")){
//         callback("logout")
//     }else{
//         callback(undefined)
//     }
// }
