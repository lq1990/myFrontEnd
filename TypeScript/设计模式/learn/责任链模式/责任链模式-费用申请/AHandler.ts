export abstract class AHandler {
  protected successor: AHandler = null;

  getSuccessor(): AHandler {
    return this.successor;
  }
  setSuccessor(s: AHandler) {
    this.successor = s;
  }
  abstract handleFeeRequest(user: string, fee: number): string;
}
