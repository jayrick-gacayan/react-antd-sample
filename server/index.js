const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5001;
const app = express();

app.use(cors());

/* For header Content-Type: application/json */
app.use(express.json());

/* For header Content-Type: application/x-www-form-urlencoded */
app.use(express.urlencoded({ extended: true }));



app.get('/api', (req, res) => {
    return res.status(200).send({ text: "Hello World", status: true });
});

app.get('/api/hello', (req, res) => {
    return res.send("<p>Hello</p>");
});


/* Server listening on a specific port */
app.listen(PORT, 
    () => {
        console.log(`Server listening on PORT ${ PORT }`);
    }
);