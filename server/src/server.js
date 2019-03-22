import Server from './libs/Server';
import configuration from './config/configuration';
import { typedefs, resolvers } from './data';
import { makeExecutableSchema } from 'apollo-server';

const server = new Server(configuration);

const initServer = () => {
    console.log('-------------------');
    
    server.bootstrap()
        .setupApollo({ schema: makeExecutableSchema({typeDefs: typedefs, resolvers}) });
    //   server.setupRoutes();
}
initServer()
export default server;