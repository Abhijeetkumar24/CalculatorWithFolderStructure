

import express from 'express';

import calculatorRoutes from './routes/calculatorRoutes';

const app = express();

app.use(express.json());
app.use('/', calculatorRoutes);

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



