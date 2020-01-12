import express from 'express';
import { foobar } from './utils';

console.log('hello23');
const app = express();

app.get('/', (req, res) => {
    foobar();
    const foo = ['hello', 1, 2];
    res.send(foo);
});

app.listen(5000, () => console.log('Service running'));
