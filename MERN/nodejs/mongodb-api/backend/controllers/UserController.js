const User = require('../models/User.js');
const Cryptr = require('cryptr');
const cryptr = new Cryptr("ws@123!!jaipur");

class UserControler {

    login(data) {
        return new Promise(
            async (res, rej) => {
                const user = await User.findOne({ email: data.email });
                if (user == undefined || user == null) {
                    rej(
                        {
                            msg: "Invalid email",
                            status: 0
                        }
                    )
                } else {
                    const decPass = cryptr.decrypt(user.password);
                    if (data.password == decPass) {
                        user.password = "";
                        const token = cryptr.encrypt(user._id);
                        res(
                            {
                                msg: "Login success",
                                user,
                                token,
                                status: 1
                            }
                        )
                    } else {
                        rej(
                            {
                                msg: "Invalid password",
                                status: 0
                            }
                        )
                    }
                }

            }
        )
    }


    deleteData(id = null) {
        return new Promise(
            (res, rej) => {
                User.deleteOne({
                    _id: id
                })
                    .then(
                        () => {
                            res({
                                msg: "Data deleted",
                                status: 1
                            })
                        }
                    ).catch(
                        () => {
                            rej({
                                msg: "Unable to delete the data",
                                status: 0
                            })
                        }
                    )
            }
        )
    }

    getData(id = null) {
        return new Promise(
            async (res, rej) => {
                try {
                    let users = []
                    if (id == null) {
                        users = await User.find();
                    } else {
                        users = await User.find({
                            _id: id
                        });
                    }
                    res({
                        status: 1,
                        users
                    })
                } catch (err) {
                    rej({
                        status: 0,
                        msg: "Internal server error",
                        users: []
                    })
                }
            }
        )
    }

    createUser(data) {
        const encPass = cryptr.encrypt(data.password);
        data.password = encPass;
        return new Promise(
            async (res, rej) => {
                if (data.name !== "" && data.email !== "" && data.password !== "") {
                    const checkUser = await User.find({
                        email: data.email
                    })
                    if (checkUser.length == 0) {
                        const user = new User({ ...data, createdAt: new Date().getTime() });
                        user.save()
                            .then(
                                (success) => {
                                    res({
                                        status: 1,
                                        msg: "User created",
                                        data: success
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
                    } else {
                        rej({
                            status: 0,
                            msg: "Email already exists"
                        })
                    }
                } else {
                    rej({
                        status: 0,
                        msg: "Please fill all the required fields"
                    })
                }


            }
        )
    }

    updateUser(id, data) {
        return new Promise(
            (res, rej) => {
                try {
                    User.updateOne(
                        {
                            _id: id
                        },
                        {
                            ...data,
                            updateAt: new Date().getTime()
                        }
                    ).then(
                        (success) => {
                            res({
                                status: 1,
                                msg: "Data updated successfully"
                            })
                        }
                    ).catch(
                        (error) => {
                            rej({
                                status: 0,
                                msg: "Unable to update the data"
                            })
                        }
                    )
                } catch (err) {
                    rej({
                        status: 0,
                        msg: "Internal server error"
                    })
                }
            }
        )
    }

}


module.exports = UserControler;