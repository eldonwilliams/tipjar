import { config, } from "dotenv"; config();

import express from "express";

const app = express();

app.get('', (_, res) => {
    res.send({ "Hello": "World", });
});

app.listen(process.env.PORT ?? 9000, () => {
    console.log(`Server is up on port ${process.env.PORT ?? 9000}`);
});