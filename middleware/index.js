var express = require('express')
var cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(port, ()=>{
    console.log(`middleware running on port ${port}`);
});