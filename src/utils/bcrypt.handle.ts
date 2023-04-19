import { hash, compare } from 'bcrypt';

const encrypt = async (password: string) => {
    const passwordHash = await hash(password, 10);
    return passwordHash
}

const verified = () => {
    
}

export {encrypt, verified}