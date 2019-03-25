import Server from './libs/Server';
import configuration from './config/configuration';
import { typeDefs, resolvers } from './data';
import { makeExecutableSchema } from 'apollo-server';

const server = new Server(configuration);

const initServer = () => {
    console.log('-------------------');
    
    server.bootstrap()
        .setupApollo({ schema: makeExecutableSchema({typeDefs, resolvers}) });
    //   server.setupRoutes();
}
initServer()
export default server;