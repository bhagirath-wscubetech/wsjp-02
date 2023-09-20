const Admin = require('../models/Admin.js');
const Cryptr = require('cryptr');
const cryptr = new Cryptr("ws@123!!jaipur");

class AdminController {

    login(data) {
        return new Promise(
            async (res, rej) => {
                const admin = await Admin.findOne({ email: data.email });
                if (admin == undefined || admin == null) {
                    rej(
                        {
                            msg: "Invalid email",
                            status: 0
                        }
                    )
                } else {
                    const decPass = cryptr.decrypt(admin.password);
                    if (data.password == decPass) {
                        admin.password = "";
                        const token = cryptr.encrypt(admin._id);
                        res(
                            {
                                msg: "Login success",
                                admin,
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
                    let admin = []
                    if (id == null) {
                        admin = await Admin.find();
                    } else {
                        admin = await Admin.find({
                            _id: id
                        });
                    }
                    res({
                        status: 1,
                        admin
                    })
                } catch (err) {
                    rej({
                        status: 0,
                        msg: "Internal server error",
                        admin: []
                    })
                }
            }
        )
    }

    createAdmin(data) {
        const encPass = cryptr.encrypt(data.password);
        data.password = encPass;
        return new Promise(
            async (res, rej) => {
                if (data.name !== "" && data.email !== "" && data.password !== "") {
                    const checkAdmin = await Admin.find({
                        email: data.email
                    })
                    if (checkAdmin.length == 0) {
                        const admin = new Admin(
                            { ...data, createdAt: new Date().getTime() }
                        );
                        admin.save()
                            .then(
                                (success) => {
                                    res({
                                        status: 1,
                                        msg: "Admin created",
                                        data: success
                                    })
                                }
                            ).catch(
                                (error) => {
                                    rej({
                                        status: 0,
                                        msg: "Unable to create the admin"
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

    updateAdmin(id, data) {
        return new Promise(
            (res, rej) => {
                try {
                    Admin.updateOne(
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


module.exports = AdminController;