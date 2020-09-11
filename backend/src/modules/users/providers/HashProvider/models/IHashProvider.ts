export default interface IHashProvider {
  generateHash(playload: string): Promise<string>;
  compareHash(playload: string, hashed: string): Promise<boolean>;
}
