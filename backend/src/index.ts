import { config, } from "dotenv"; config();

import express from "express";
import cors from "cors";
import cookies from "cookie-parser";
import { readdir, } from "fs";
import { join, } from "path";
import { contains } from "./shared/arrayutil";
import { Handler } from "./global";

const app = express();
app.use(cors({
    credentials: true,
}));
app.use(cookies());

readdir(join(__dirname, 'handlers'), { withFileTypes: true, }, (err, files) => {
    if (err) console.log(err);
    files.filter(f => contains(["ts", "js"], f.name.split('.').pop())).forEach(file => {
        console.log(`Loading Handler ${file.name}`)
        const fileModule: { default: Handler, } = require(join(__dirname, 'handlers', file.name));
        if (typeof fileModule.default !== "function") return;
        fileModule.default({ application: app, });
    });
});

app.listen(process.env.PORT ?? 9000, () => {
    console.log(`Server is up on port ${process.env.PORT ?? 9000}`);
    process.env.STARTED_AT = Date.now().toString();
});