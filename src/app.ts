import express from 'express';
import bodyParser from 'body-parser';
import justifyRoute from './routes/justifyRoute';
import auth from './routes/authentificationRoute';

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.text({ type: 'text/plain' }));
app.use('/api/justify', justifyRoute);
app.use(bodyParser.json());
app.use('/api/token',auth);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

