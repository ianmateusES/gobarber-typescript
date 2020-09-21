import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeUserTokensRepository from '../repositories/fakes/FakeUserTokensRepository';
import SendForgotPasswordEmailServices from './SendForgotPasswordEmailService';

let fakeUsersRepository: FakeUsersRepository;
let fakeUserTokensProvider: FakeUserTokensRepository;
let fakeMailProvider: FakeMailProvider;
let sendForgotPasswordEmail: SendForgotPasswordEmailServices;

describe('SendForgotPasswordEmail', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeUserTokensProvider = new FakeUserTokensRepository();
    fakeMailProvider = new FakeMailProvider();

    sendForgotPasswordEmail = new SendForgotPasswordEmailServices(
      fakeUsersRepository,
      fakeMailProvider,
      fakeUserTokensProvider,
    );
  });

  it('should be able to recover the password using the email', async () => {
    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');
    await fakeUsersRepository.create({
      name: 'João Frango',
      email: 'joaofrango@exemplo.com',
      password: '123456',
    });

    await sendForgotPasswordEmail.execute({
      email: 'joaofrango@exemplo.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });

  it('should not be able to recover a non-existing user password', async () => {
    await expect(
      sendForgotPasswordEmail.execute({
        email: 'joaofrango@exemplo.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should generate a forgot password token', async () => {
    const generateToken = jest.spyOn(fakeUserTokensProvider, 'generate');
    const user = await fakeUsersRepository.create({
      name: 'João Frango',
      email: 'joaofrango@exemplo.com',
      password: '123456',
    });

    await sendForgotPasswordEmail.execute({
      email: 'joaofrango@exemplo.com',
    });

    expect(generateToken).toHaveBeenCalledWith(user.id);
  });
});
