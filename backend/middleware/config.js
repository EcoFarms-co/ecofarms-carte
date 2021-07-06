require('dotenv').config();

exports.url = "https://localhost:4000"
exports.getOption = (token) =>  {
    return {
        headers: {'Authorization': 'Bearer '+token}
    };
}