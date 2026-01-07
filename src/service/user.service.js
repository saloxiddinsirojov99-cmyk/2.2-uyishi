class UserService {
    constructor() {}
    async register() {
        return {
            success: true,
            message: "User registered successfully",
            accessToken: "dasdkjhfkjahsdh.dsajhhkjj"
        }
    }
}
export default new UserService()