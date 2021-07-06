const axios = require('axios');
const config = require('../middleware/config')

exports.getAll = (callback) => {
    axios.get(config.url + '/api/farms')
        .then(function (response) {
            callback(response.data);
        }).catch(function (error) {
            console.log("error thrown ", error);
        });
}

exports.get = (id, callback) => {
    axios.get(config.url + '/api/farms/' + id)
        .then(function (response) {
            callback(response.data)
        })
        .catch(function (error) {
            throw new Error(error)
        });
}


exports.getPhoto = (id, callback) => {
    axios.get(config.url + '/api/farms/' + id + '/photo')
        .then(function (response) {
            callback(response.data)
        })
        .catch(function (error) {
            console.log(error)
            throw new Error(error)
        });
}

exports.getRegion = (reg, callback) => {
    axios.get(config.url + '/api/farms/regions/' + reg)
        .then(function (response) {
            callback(response.data)
        })
        .catch(function (error) {
            console.log(error)
            throw new Error(error)
        });
}

exports.create = (body, callback) => {
    // body = {
    //     ...body,
    //   //  user: currentUserId,
    //     img: img
    // };
    axios.post(config.url + '/api/farms', body)
        .then(function (response) {
            if (response.status === '201') {
                callback(undefined);
            } else {
                callback('Une erreur est survenue. Veuillez rééssayer')
            }
        })
        .catch(function (error) {
            console.log("error thrown");
        });
}

exports.ajouter = (body, callback) => {
    body = {
        ...body,
        user: currentUserId
    };
    axios.post(config.url + '/api/farms', body)
        .then(function (response) {
            if (response.status === '201') {
                callback(undefined)
            } else {
                callback('Une erreur est survenue. Veuillez rééssayer')
            }
        })
        .catch(function (error) {
            console.log("error thrown");
        });
}

exports.upload = (farmId, buffer, callback) => {
    axios.post(config.url + '/api/farms/' + farmId + '/upload', { buffer: buffer })
        .then(function (response) {
            if (response.status === '201') {
                callback(undefined)
            } else {
                callback('Une erreur est survenue. Veuillez rééssayer')
            }
        })
        .catch(function (error) {
            console.log("error thrown");
        });
}

exports.update = (id, body, callback) => {
    axios.put(config.url + '/api/farms/update/' + id, body)
        .then(function (response) {
            if (response.status === '200') {
                callback(undefined)
            } else {
                callback('Une erreur est survenue. Veuillez rééssayer')
            }
        })
        .catch(function (error) {
            console.log("error thrown");
        });
}

exports.delete = (id, callback) => {
    axios.delete(config.url + '/api/farms/' + id)
        .then((response) => {
            if (response.status == '204') {
                callback(undefined)
            } else {
                callback('Une erreur est survenue. Veuillez rééssayer')
            }
        })
        .catch(function (error) {
            console.log("error thrown");
        });
}