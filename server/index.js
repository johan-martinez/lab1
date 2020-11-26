var express = require('express')
var cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
    res.sendStatus(200)
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});