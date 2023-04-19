import { hash, compare } from 'bcrypt';

const encrypt = async (password: string) => {
    const passwordHash = await hash(password, 10);
    return passwordHash
}

const verified = async(password: string, passwordHash: string) => {
    const isCorrect = await compare(password, passwordHash);
    return isCorrect;
}

export {encrypt, verified}