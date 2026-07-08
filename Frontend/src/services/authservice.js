import api from "./api";

class AuthService 
{
    async signup(data) 
    {
        const response =await api.post("/auth/signup",data);
        return response.data;
    }
    async login(data) 
    {
        const response =await api.post("/auth/login",data);
        return response.data;
    }
}
export default new AuthService();