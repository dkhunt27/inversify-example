import { AxiosInstance } from 'axios';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { InjectableTypes } from './inversify.types';
import { ILibBService } from './lib-b.interface';

// would be from npm package
import { ILibAService } from './../../lib-a/src/lib-a.interface';

@injectable()
export class LibBService implements ILibBService {
  protected _axios: AxiosInstance;
  protected _libA: ILibAService;

  constructor(@inject(InjectableTypes.Axios) axios: AxiosInstance, @inject(InjectableTypes.LibAService) libA: ILibAService) {
    this._axios = axios;
    this._libA = libA;
  }

  public async output(): Promise<void> {
    const resp = await this._axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(`title: ${resp.data.title}`);

    await this._libA.hello();
  }
}
