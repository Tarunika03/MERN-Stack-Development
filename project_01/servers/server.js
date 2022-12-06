const express = require('express');
const dotenv = require('dotenv')
const app = express();

dotenv.config({ path: './config.env' })
require('./db/conn');
const PORT = process.env.PORT;
// const User = require('./model/userSchema');
app.use(express.json());

app.use(require('./router/auth.js'));
 app.get('/', (req, res) => {
    res.send('Hello duniya');

})

// const NewSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// })
// const newModel = new mongoose.model("Collection", NewSchema);
// const data = new newModel({ name: 'vj', age: 30 });
// data.save();
// app.get('/', (req, res) => {
//     res.send('Hello duniya');
//     console.log(data);
// })
// console.log(data);

app.listen(PORT, () => {
    console.log('conn..')
    console.log(PORT);

})