import api from "./api";

class AuthService {
    async signup(data) {
        const response = await api.post("/auth/signup", data);
        return response.data;
    }
    async verifyEmail(data) {
        const response = await api.post(
            "/auth/verify-email",data
        );
        return response.data;
    }
    async login(data) {
        const response = await api.post("/auth/login", data);
        return response.data;
    }
    async forgotPassword(data) {

        const response = await api.post(
            "/auth/forgot-password",
            data
        );

        return response.data;

    }

    async resetPassword(data) {
        const response = await api.post(
            "/auth/reset-password",
            data
        );

        return response.data;

    }
}
export default new AuthService();