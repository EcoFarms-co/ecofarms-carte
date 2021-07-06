const axios = require('axios');
const config = require('../middleware/config')

// const config.getOption(token) = {
//     headers: {'Authorization': 'Bearer '+token}
//   };

exports.getAll = (token, callback) => {

    axios.get(config.url+'/api/score-dimensions')
    .then(function (response) {
        callback(response.data)
    })
    .catch(function (error) {
        callback(undefined)
        throw new Error(error)
    });
}

exports.get = (id, token, callback) => {
    axios.get(config.url+'/api/score-dimensions/'+id)
    .then(function (response) {
        callback(response.data)
    })
    .catch(function (error) {
        // handle error
        // console.log(error);
        throw new Error(error)
    });
}

exports.create = (body, token, callback) => {
    // body = {
    //     ...body,
    //     createdBy: currentUserId
    // };
    axios.post(config.url+'/api/score-dimensions', body)
    .then(function (response) {
        if (response.status === '201'){
            callback(undefined)
        }else{
            callback('Une erreur est survenue. Veillez rééssayer')
        }
    })
    .catch(function (error) {
        throw new Error(error);
    });
}

exports.update = (id ,body, token, callback) => {
    axios.put(config.url+'/api/score-dimensions/'+id,body)
    .then(function (response) {
        if (response.status === '200'){
            callback(undefined)
        }else{
            callback('Une erreur est survenue. Veillez rééssayer')
        }
    })
    .catch(function (error) {
        throw new Error(error);
    });
}

exports.delete = (id , token, callback) => {
    axios.delete(config.url+'/api/score-dimensions/'+id)
    .then((response) => {
        if (response.status == '204'){
            callback(undefined)
        }else{
            callback('Une erreur est survenue. Veillez rééssayer')
        }
    })
    .catch(function (error) {
        throw new Error(error);
    });
}
