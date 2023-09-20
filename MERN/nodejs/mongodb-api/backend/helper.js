const Cryptr = require('cryptr');
const cryptr = new Cryptr("ws@123!!jaipur");
const Admin = require('./models/Admin.js');

function generateNameAndDesti(original_name, modal) {
    const fileName = Math.floor(Math.random() * 10000) + new Date().getTime() + original_name;
    const desti = "./public/" + modal + "/" + fileName;
    return {
        fileName,
        desti
    }
}

function validateUserRequest(token) {
    console.log("validateUserRequest",token);
    return new Promise(
        async (res, rej) => {
            const id = cryptr.decrypt(token);
            const admin = await Admin.findOne({ _id: id });
            if (admin == null || admin == undefined) {
                rej(false);
            } else {
                res(true);
            }
        }
    )

}

module.exports = {
    generateNameAndDesti,
    validateUserRequest
}

