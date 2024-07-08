import express from 'express';
import { routes } from './routes';
import { setupMongo } from './database';

const app = express();

setupMongo().then(()=>{
    
    app.use(express.json());
    app.use(routes);
    
    app.listen(4000, () => {console.log('Server is runninf at port 4000!')});

})



