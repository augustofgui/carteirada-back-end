import express from 'express';
import router from '../http/routes';

const app = express();
const port = process.env.PORT || 4003;

app.use(express.json());
app.use(router);

app.listen(port, () => console.log('🚀 Server is runnning in PORT ' + port));
