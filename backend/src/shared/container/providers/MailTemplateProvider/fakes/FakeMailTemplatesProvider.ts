import IMailTemplatesProvider from '../models/IMailTemplateProvider';

class FakeMailTemplatesProvider implements IMailTemplatesProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailTemplatesProvider;
