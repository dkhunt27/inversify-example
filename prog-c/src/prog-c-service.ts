import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { InjectableTypes } from './inversify.types';
import { IProgCService } from './prog-c.interface';

// would be from npm package
import { ILibBService } from '../../lib-b/src/lib-b.interface';

@injectable()
export class ProgCService implements IProgCService {
  protected _libB: ILibBService;

  constructor(@inject(InjectableTypes.LibBService) libB: ILibBService) {
    this._libB = libB;
  }

  public async exec(): Promise<void> {
    await this._libB.output();
  }
}
