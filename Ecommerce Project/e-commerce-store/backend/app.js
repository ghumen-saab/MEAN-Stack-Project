const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const categoryRoutes = require('./routes/category');

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/category', categoryRoutes);
async function connectDb() {
    await mongoose.connect('mongodb://localhost:27017/mydatabase', {
        dbName: "e-commerce-store"
    }
    )
    console.log('connection successful');
}
connectDb().catch(err => {
    console.error(err);
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`, port);
});
