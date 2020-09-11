import IHashProvider from '../models/IHashProvider';

class FakeHashProvider implements IHashProvider {
  public async generateHash(playload: string): Promise<string> {
    return playload;
  }

  public async compareHash(playload: string, hashed: string): Promise<boolean> {
    return playload === hashed;
  }
}

export default FakeHashProvider;
