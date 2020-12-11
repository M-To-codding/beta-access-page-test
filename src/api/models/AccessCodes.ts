export class AccessCodes implements IAccessCodes {
  public codes: Array<string>;

  constructor(codes: Array<string>) {
    this.codes = codes;
  }
}