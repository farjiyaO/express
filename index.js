import express from 'express';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

var brandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// function generateBrandName(req,res,next) {
//     console.log(req.body);
//     // brandName = req.body["fname"] + req.body["lname"];
//     next();
// }
// app.use(generateBrandName);



// app.get('/', (req, res) => {
//   res.send('Farjiya, you did it! Keep working hard!');
// });
// app.get('/about', (req, res) => {
//   res.send('<h1>About page<h1>');
// });



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.post('/submit', (req, res) => {
    console.log(req.body);
    brandName = req.body["fname"] + req.body["lname"];
    console.log(brandName);
    res.send(`<h1>Your brand name is: <h1><h2>${brandName}</h2>`);
});



//to run the server
app.listen(port, () => {
  console.log('Server is running on port ${port}');
});