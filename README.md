# Mini Market Project
## How run repository in local environment.
- Clone the repository from https://github.com/krisskira/mini-market and install the node dependencies run `yarn install` command or `npm install` command.
- Modify the .env file to add the `VITE_PAYMENT_GATEWAY_SECRET` to enable payment gateway.
- Finally run the `yarn dev` command or `npm run dev` command.
- To see the app visit http://localhost:5173/ 

## How run the tests.

## How build the app for a production environment.

- Firstly  you need change the `VITE_PAYMENT_GATEWAY_SECRET` value in `.env` file for the production or real value.

- To build app you need run `yarn build` or `npm run build` command, so a `dist folder` is generated with all statics files. For get more information [go to here](https://es.vitejs.dev/guide/build.html)

- To deploy at host for example [surge.sh](https://surge.sh/), first you need read the [surge.sh documentation](https://surge.sh/help/) to settings the environment and after that you push the statics files. [Read More](https://es.vitejs.dev/guide/static-deploy.html#surge)

