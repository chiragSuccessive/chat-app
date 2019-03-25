// import bodyParser from 'body-parser';
// import compress from 'compression';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
import Express from 'express';
// import helmet from 'helmet';
import { ApolloServer } from 'apollo-server-express';
import { errorHandlerRoute, notFoundRoute } from './routes';

export default class Server {
    constructor(config) {
    this.config = config;
    this.app = new Express();
    this.run = this.run.bind(this);
    }

    bootstrap() {
        this.setupRoutes();
        return this;
    }

    setupRoutes() {
        this.app.use('/health-check', (req, res) => {
        res.send('I am OK');
        });
    
        // catch 404 and forward to error handler
        // this.app.use(notFoundRoute);
    
        // error handler, send stacktrace only during development
        // this.app.use(errorHandlerRoute);
    }

    async setupApollo(data) {
        const { app } = this;
        this.server = await new ApolloServer(data);
        await this.server.applyMiddleware({ app });
        this.run();
    }

    run() {
        const { port, env } = this.config;
        const serverr = this.app.listen(port, () => {
            console.info(`server started on port ${port}`);
        });
          this.server.installSubscriptionHandlers(serverr);
        return this;
    }
}