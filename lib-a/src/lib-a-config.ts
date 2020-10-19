import { injectable } from 'inversify';
import 'reflect-metadata';
import { ILibAConfig } from './lib-a-config.interface';

@injectable()
export class LibAConfig implements ILibAConfig {
  protected _msg: string;

  constructor(msg: string) {
    this._msg = msg;
  }

  public getMsg(): string {
    return this._msg;
  }
}
