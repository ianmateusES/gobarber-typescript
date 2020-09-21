import IMailProvider from '../models/IMailProvider';

interface IMenssage {
  to: string;
  body: string;
}

export default class FakeMailProvider implements IMailProvider {
  private messages: IMenssage[] = [];

  public async sendMail(to: string, body: string): Promise<void> {
    this.messages.push({ to, body });
  }
}
