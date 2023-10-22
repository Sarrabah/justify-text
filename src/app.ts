import express from 'express';
import bodyParser from 'body-parser';
import justifyRoute from './routes/justifyRoute';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.text({ type: 'text/plain' }));
app.use('/justify', justifyRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

