const axios = require('axios');
const config = require('../middleware/config');

exports.getAll = (token, callback) => {
    axios.get(config.url + '/api/users')
        .then(function (response) {
            callback(response.data);
        }).catch(function (error) {
            throw new Error(error);
        });
};

exports.get = (id, token, callback) => {
    axios.get(config.url + '/api/users/' + id)
        .then(function (response) {
            callback(response.data)
        })
        .catch(function (error) {
            throw new Error(error)
        });
}

exports.create = (body, token, callback) => {
    // body = {
    //     ...body,
    //     createdBy: "TODO"
    // };
    axios.post(config.url + '/api/users/create', body)
        .then(function (response) {
            if (response.status === '201') {
                callback(undefined)
            } else {
                callback('Une erreur est survenue. Veuillez rééssayer')
            }
        })
        .catch(function (error) {
            callback('Une erreur est survenue. Veuillez rééssayer')
            throw new Error(error);
        });
}

exports.delete = (id, token, callback) => {
    axios.delete(config.url + '/api/users/' + id)
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

exports.update = (id, body, token, callback) => {
    axios.put(config.url + '/api/users/update/' + id, body)
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

exports.login = (body, token, callback) => {
    axios.post(config.url + '/api/users/login', body)
        .then(function (response) {
            if (response.status === 200) {
                callback(undefined, response.data.token);
            } else {
                callback('Une erreur est survenue. Veuillez rééssayer', undefined);
            }
        })
        .catch(function (error) {
            throw new Error(error)
        });
};


exports.logout = (token, callback) => {
    axios.post(config.url + '/api/users/logout', '')
        .then(function (response) {
            if (response.status === 200) {
                callback(undefined);
            } else {
                callback('Une erreur est survenue. Veuillez rééssayer');
            }
        })
        .catch(function (error) {
            throw new Error(error)
        });
}