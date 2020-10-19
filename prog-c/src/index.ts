import { IProgCService } from './prog-c.interface';
import { diContainer } from './inversify.config';
import { InjectableTypes } from './inversify.types';

const progC = diContainer.get<IProgCService>(InjectableTypes.ProgCService);

progC.exec().then(() => console.log('done'));

