class AppError {
  public readonly messege: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.messege = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
