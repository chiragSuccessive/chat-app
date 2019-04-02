import Server from './libs/Server';
import configuration from './config/configuration';
import { typeDefs, resolvers } from './data';
import {PubSub} from 'apollo-server';

const server = new Server(configuration);
const pubsub = new PubSub();
const initServer = () => {
    server.bootstrap()
        .setupApollo( {typeDefs, resolvers, context: {pubsub}} );
}
initServer()
export default server;