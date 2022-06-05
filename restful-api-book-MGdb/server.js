let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mysql = require('mysql');
const Books = require('./models/Books')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/getAll', (req, res) => {

    Books.find({}, (err, tasks) => {
        if (err) res.send(err);
        res.json(tasks);
    });
})


app.post('/insert', (req, res) => {
    console.log(req.body.name)
    console.log(req.body.price)

    let data = new Books({
        name: req.body.name,
        price: req.body.price,
    })

    Books.saveBooks(data, (err) => {
        if (err) { console.log(err) }
        else {
            res.json({
                message: 'task successfully Insert',
            });
        }
    })
})


app.post('/getBook', (req, res) => {
    let Books_id = req.body.id;

    Books.findOne({ _id: Books_id }).exec((err, tasks) => {
        res.json(tasks);
    })

})


app.post('/delete', (req, res) => {

    const Books_id = req.body.id

    Books.findByIdAndDelete(Books_id, { useFindAndModify: false }).exec(err => {
        if (err) { console.log(err) }
        else {
            res.json({
                message: 'task successfully Delete',
            });
        }

    })
})


app.post('/update', (req, res) => {
    const Books_id = req.body.id
    let data = {
        name: req.body.name,
        price: req.body.price
    }

    Books.findByIdAndUpdate(Books_id, data, { useFindAndModify: false }).exec(err => {
        if (err) { console.log(err) }
        else {
            res.json({
                message: 'task successfully Update',
            });
        }
    })
})


app.listen(3000, () => {
    console.log('Node App is running on port 3000');
})

module.exports = app;
