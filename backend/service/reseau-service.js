const axios = require('axios');
const config = require('../middleware/config')

exports.getAll = (callback) => {

    axios.get(config.url + '/api/reseaux')
        .then(function (response) {
            callback(response.data)
        })
        .catch(function (error) {
            callback(undefined)
            throw new Error(error)
        });
}

exports.get = (id, callback) => {
    axios.get(config.url + '/api/reseaux/' + id)
        .then(function (response) {
            callback(response.data)
        })
        .catch(function (error) {
            // handle error
            // console.log(error);
            throw new Error(error)
        });
}

exports.create = (body, callback) => {
    axios.post(config.url + '/api/reseaux', body)
        .then(function (response) {
            if (response.status === '201') {
                callback(undefined)
            } else {
                callback('Une erreur est survenue. Veuillez rééssayer')
            }
        })
        .catch(function (error) {
            throw new Error(error);
        });
}

exports.update = (id, body, callback) => {
    axios.put(config.url + '/api/reseaux/' + id, body)
        .then(function (response) {
            if (response.status === '200') {
                callback(undefined)
            } else {
                callback('Une erreur est survenue. Veuillez rééssayer')
            }
        })
        .catch(function (error) {
            throw new Error(error);
        });
}

exports.delete = (id, callback) => {
    axios.delete(config.url + '/api/reseaux/' + id)
        .then((response) => {
            if (response.status == '204') {
                callback(undefined)
            } else {
                callback('Une erreur est survenue. Veuillez rééssayer')
            }
        })
        .catch(function (error) {
            throw new Error(error);
        });
}