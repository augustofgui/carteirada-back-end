import ITokenProvider from "../models/ITokenProvider";

import { sign } from "jsonwebtoken";
import authConfig from "@config/auth";

export default class JWTTokenProvider implements ITokenProvider {
  public async generateToken(payload: string): Promise<string> {
    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: payload,
      expiresIn,
    });

    return token;
  }
}