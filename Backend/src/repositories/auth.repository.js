import prisma from "../db/prisma.js";

class AuthRepository {

    async findUserByEmail(email) {
        return await prisma.user.findUnique({
            where: {
                email
            }
        });
    }

    async createUser(data) {
        return await prisma.user.create({
            data
        });
    }

    async saveRefreshToken(userId, token, expiresAt) {
        return await prisma.refreshToken.create({
            data: {
                userId,
                token,
                expiresAt
            }
        });
    }
}

export default new AuthRepository();