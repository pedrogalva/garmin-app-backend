import * as bcrypt from "bcryptjs";

/**
 * Generates a new random salted hash.
 *
 * @param userNewPassword - The plain text new password to encrypt.
 * @returns An object containing the generated hash and salt.
 */
export const hashPassword = (userNewPassword: string) => {
  let _salt = bcrypt.genSaltSync(10);
  let _hash = bcrypt.hashSync(userNewPassword, _salt);

  return { hash: _hash, salt: _salt };
};

/**
 * Compares a plain text password with a hashed password.
 *
 * @param ps - The plain text password to compare.
 * @param hashedPassword - The hashed password to compare against.
 * @returns A boolean indicating whether the passwords match.
 */
export const comparePasswords = (ps: string, hashedPassword: string) => {
  return bcrypt.compareSync(ps, hashedPassword);
};
