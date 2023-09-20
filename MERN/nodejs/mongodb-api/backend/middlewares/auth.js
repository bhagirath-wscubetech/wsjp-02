const { validateUserRequest } = require("../helper");
const exceptedRoutes = [
    "/admin/login",
    "/category",
    "/decrypt-password"
]


function auth(req, res, next) {
    if(exceptedRoutes.includes(req.path)) return next();
    if (req.headers.authorization != undefined) {
        validateUserRequest(req.headers.authorization)
            .then(
                () => {
                    next();
                }
            )
            .catch(
                () => {
                    res.send({
                        msg: "Unauthorized - Invalid",
                        status: 0
                    })
                }
            )
    } else {
        res.send({
            msg: "Unauthorized - Not found",
            status: 0
        })
    }
}
module.exports = auth;