import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "my-secret-01"

const generateToken = (id: string) => {
    const jwt = sign({ id }, JWT_SECRET, {
        expiresIn: "2h",
    });
    return jwt;
}


const verifyToken = async (token: string) => {
    
}

export { generateToken, verifyToken }