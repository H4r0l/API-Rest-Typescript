import { User } from "../interfaces/user.interface";
import userModel from "../models/user";
import { encrypt } from "../utils/bcrypt.handle";

const registerNew = async ({ email, password, name }: User) => {
  const checkIs = await userModel.findOne({ email });
  if (checkIs) return "ALREADY_USER";

  const passHash = await encrypt(password);
  const registerNew = await userModel.create({
    email,
    password: passHash,
    name,
  });
  return registerNew;
};

const loginUser = async (req: Request, res: Response) => {};
export { registerNew, loginUser };
