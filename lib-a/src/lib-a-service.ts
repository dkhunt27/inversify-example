import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { ILibAService } from './lib-a.interface';
import { InjectableTypes } from './inversify.types';
import { LibAConfigProvider } from './inversify.config';

@injectable()
export class LibAService implements ILibAService {
  protected _configProvider: LibAConfigProvider;

  constructor(@inject(InjectableTypes.LibAConfigProvider) configProvider: LibAConfigProvider) {
    this._configProvider = configProvider;
  }

  public async hello(): Promise<void> {
    const config = await this._configProvider();
    const msg = config.getMsg();
    console.log(`Hello World: ${msg}`);
  }
}
