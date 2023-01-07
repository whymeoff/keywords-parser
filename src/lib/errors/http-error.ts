export class HttpError extends Error {
  constructor(private status: number, message: string) {
    super(message);
  }

  getStatus(): number {
    return this.status;
  }
}
