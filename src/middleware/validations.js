import Validation from "../utils/validation.js";

export default (req, res, next) => {
    if(req.url === "/api/register") {
        Validation.registerSchema.validate(req.body, (err, value) => {
            if(err) {
                return res.status(400).json({
                    status: 400,
                    message: err.details[0].message
                });
            }
        });
    }
    else if(req.url === "/api/login") {
        Validation.loginSchema.validate(req.body, (err, value) => {
            if(err) {
                return res.status(400).json({
                    status: 400,
                    message: err.details[0].message
                });
            }
        });
    }
    return next();
};
