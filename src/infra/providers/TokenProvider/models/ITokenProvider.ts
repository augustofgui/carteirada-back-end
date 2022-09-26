export default interface ITokenProvider {
  generateToken(payload: string): Promise<string>;
}
