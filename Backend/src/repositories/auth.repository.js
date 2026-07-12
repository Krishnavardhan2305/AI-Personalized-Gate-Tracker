import prisma from "../db/prisma.js";
class AuthRepository {
    // ==========================
    // User
    // ==========================
    async findUserByEmail(email) {
        return await prisma.user.findUnique({
            where: {email}
        });
    }
    async verifyEmail(userId) 
    {
        return await prisma.user.update({
            where: {id: userId},
            data: {emailVerified: true}
        });
    }
    async createUser(data) {
        return await prisma.user.create({data});
    }
    async updatePassword(userId, password) {
        return await prisma.user.update({
            where: {id: userId},
            data: {password}
        });
    }
    // ==========================
    // Refresh Token
    // ==========================
    async saveRefreshToken(userId, token, expiresAt) {
        return await prisma.refreshToken.create({
            data: {userId,token,expiresAt}
        });
    }
    async deleteRefreshTokens(userId) {
        return await prisma.refreshToken.deleteMany({
            where: {userId}
        });
    }
    // ==========================
    // OTP
    // ==========================
    async createOTP(userId, otp, type, expiresAt) 
    {
        return await prisma.oTP.create({
            data: {
                userId,
                otp,
                type,
                expiresAt
            }
        });
    }
    async findLatestOTP(userId, type) {
        return await prisma.oTP.findFirst({
            where: {
                userId,
                type
            },
            orderBy: {
                createdAt: "desc"
            }
        });
    }
    async deleteOldOTPs(userId, type) {
        return await prisma.oTP.deleteMany({
            where: {
                userId,
                type
            }
        });
    }

    async deleteOTP(id) {
        return await prisma.oTP.delete({
            where: {
                id
            }
        });
    }
}
export default new AuthRepository();