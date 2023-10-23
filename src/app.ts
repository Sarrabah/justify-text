import express from 'express';
import bodyParser from 'body-parser';
import justifyRoute from './routes/justifyRoute';
import authRouter from './routes/authentificationRoute';
import {jwtAuthMiddleware} from './middleware/authentification';

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.text({ type: 'text/plain' }));
app.use('/api/justify', jwtAuthMiddleware,justifyRoute);
app.use(bodyParser.json());
app.use('/api/token',authRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

