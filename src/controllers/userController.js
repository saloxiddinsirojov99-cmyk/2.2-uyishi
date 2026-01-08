import userService from "../service/user.service.js";

class UserController {
    async register(req, res) {
        const result = await userService.register(req.body);
        res.status(result.status).json(result);
    }

    async login(req, res) {
        const result = await userService.login(req.body);
        res.status(result.status).json(result);
    }
}

export default new UserController();

