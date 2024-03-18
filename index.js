import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __filepath = fileURLToPath(import.meta.url);

const __dirname = dirname(__filepath);


const app = express();
const port = 3000;
var quote;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(import.meta.url);
    console.log(__filepath);
    console.log(__dirname);
});

function getCurrentDay(req, res, next){
    var date = new Date();
    var day = date.getDay();
    if(day == 1 || day == 2 || day == 3 || day == 4 || day == 5){
        quote = "Hey! It's a weekday, it's time to work hard!";
        }
    else{
        quote = "Hey! It's the weekend, it's time to have fun!";
    }
    next();
}

app.use(getCurrentDay);

app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs", {quote: quote});
});