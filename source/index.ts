const serverless = require('serverless-http');
import express, { Express } from 'express';
import morgan from 'morgan';
import routes from './routes/posts';

const router: Express = express();

router.use(morgan('dev'));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

router.use(`/${process.env.ENVIRONMENT}`, routes);

router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

if (process.env.ENVIRONMENT === 'production') {
    exports.handler = serverless(router);
} else {
    const PORT: any = process.env.PORT ?? 6060;
    router.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}.`);
    });
}
