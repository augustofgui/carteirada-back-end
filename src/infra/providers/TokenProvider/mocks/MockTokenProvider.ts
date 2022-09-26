import ITokenProvider from "../models/ITokenProvider";

export default class MockTokenProvider implements ITokenProvider {
  public async generateToken(payload: string): Promise<string> {
    return (
      Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
    );
  }
}
