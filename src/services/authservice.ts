import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import userModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

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

const loginUser = async ({email, password}: Auth) => {
  const checkIs = await userModel.findOne({ email });
  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs.password;
  const Verify = await verified(password, passwordHash);

  if (!Verify) return "WRONG_PASSWORD";

  const token = generateToken(checkIs.email);

  const data = {
    token,
    user: checkIs
  };
  return data;
};

export { registerNew, loginUser };
