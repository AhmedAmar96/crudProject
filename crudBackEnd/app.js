const express = require('express');
const cors = require('cors')
const dbConnection = require('./config/db');
const app = express();
const userRoutes = require('./src/users/Routers/usersRoutes');
const productRoutes = require('./src/products/routers/productRouter');
const port = 8080;

dbConnection();
app.use(express.json());
app.use(cors());
app.use(userRoutes);
app.use(productRoutes);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));