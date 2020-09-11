import { hash, compare } from 'bcryptjs';

import IHashProvider from '../models/IHashProvider';

class BCryptHashProvider implements IHashProvider {
  public async generateHash(playload: string): Promise<string> {
    return hash(playload, 8);
  }

  public async compareHash(playload: string, hashed: string): Promise<boolean> {
    return compare(playload, hashed);
  }
}

export default BCryptHashProvider;
