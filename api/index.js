import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log('API server is running on PORT 3000');
});