import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface";
import userModel from "../models/user"

const registerNewUser = async ({email, password, name}: User) => {
    const checkIs = await userModel.findOne({ email });
    if (checkIs) return "USER_EXISTS";
    const registerNew = await userModel.create({ email, password, name });
    return registerNew
}

const loginUser = async (req: Request, res: Response) => {
    
}
export { registerNewUser, loginUser }