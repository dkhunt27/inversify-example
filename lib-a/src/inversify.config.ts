import { ILibAConfig } from './lib-a-config.interface';
import { Container } from 'inversify';
import 'reflect-metadata'; 
import { InjectableTypes } from './inversify.types';
import { LibAConfig } from './lib-a-config';

export declare type LibAConfigProvider = () => Promise<ILibAConfig>;

const diContainer = new Container();

export { diContainer };
