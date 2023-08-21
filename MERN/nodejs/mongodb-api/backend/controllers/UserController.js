const User = require('../models/User.js');
class UserControler {
    getData() {

    }

    createUser(data) {
        return new Promise(
            (res, rej) => {
                const user = new User(data);
                user.save()
                    .then(
                        (success) => {
                            res({
                                status: 1,
                                msg: "User created"
                            })
                        }
                    ).catch(
                        (error) => {
                            rej({
                                status: 0,
                                msg: "Unable to create the user"
                            })
                        }
                    )
            }
        )
    }
}


module.exports = UserControler;