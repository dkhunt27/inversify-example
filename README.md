Inversify example

When using libraries that use inversify, seems like i need to include setup/dependencies that should be in those libraries and not in my main code.  Might need to use modules for those libraries iocs?

So for example, prog-c injects lib-b which injects lib-a.  However, i need to include the ioc setup for lib-a and include and dependencies from lib-b in prog-c to get the logic to execute.

Execute with 
```
cd lib-a
yarn install
cd ../lib-b
yarn install
cd ../prog-c
yarn install
ts-node ./src/index.ts

# install ts-node globally npm install ts-node -g
```