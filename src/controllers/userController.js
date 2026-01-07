import UserService from "../service/user.service.js";

class UserController {
    async register(req, res) {
        const result = await UserService.register(req.body);
        res.json(result);
    }
}

export default new UserController();

