import { ProgCService } from './prog-c-service';
import { IProgCService } from './prog-c.interface';

import { Container } from 'inversify';
import 'reflect-metadata'; 
import { InjectableTypes } from './inversify.types';

// would be from npm package
import { ILibAConfig } from '../../lib-a/src/lib-a-config.interface';
import { LibAConfig } from './../../lib-a/src/lib-a-config';
import { LibBService } from './../../lib-b/src/lib-b-service';
import { ILibBService } from '../../lib-b/src/lib-b.interface';
import { LibAConfigProvider } from '../../lib-a/src/inversify.config';

// shouldn't have to import packages that are dependencies for libraries
import axios, { AxiosInstance } from 'axios';
import { ILibAService } from '../../lib-a/src/lib-a.interface';
import { LibAService } from '../../lib-a/src/lib-a-service';

const diContainer = new Container();

diContainer.bind<LibAConfigProvider>(InjectableTypes.LibAConfigProvider).toProvider<ILibAConfig>(() => {
  return (): Promise<ILibAConfig> => {
      return new Promise<ILibAConfig>((resolve) => {
        resolve(new LibAConfig("test123"));
      });
  };
});

diContainer.bind<ILibBService>(InjectableTypes.LibBService).to(LibBService)
diContainer.bind<IProgCService>(InjectableTypes.ProgCService).to(ProgCService)

// to fix error: No matching bindings found for serviceIdentifier: Symbol(Axios) 
// which requires me to add axios to package.json
diContainer.bind<AxiosInstance>(InjectableTypes.Axios).toConstantValue(axios);

// to fix error: No matching bindings found for serviceIdentifier: Symbol(LibAService)
// which requires me to dependencies' dependencies
diContainer.bind<ILibAService>(InjectableTypes.LibAService).to(LibAService)

export { diContainer };
