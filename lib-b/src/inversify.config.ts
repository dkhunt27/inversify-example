import axios, { AxiosInstance } from 'axios';
import { Container } from 'inversify';
import 'reflect-metadata'; 
import { InjectableTypes } from './inversify.types';

const diContainer = new Container();

diContainer.bind<AxiosInstance>(InjectableTypes.Axios).toConstantValue(axios);

export { diContainer };
