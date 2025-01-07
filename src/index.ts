import * as express from 'express';


let app: express.Application = express();



const port = 3000;
app.listen(port, () => {
    console.log(`Application is listening at Port: ${port}`);
})