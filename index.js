const express = require('express')
const app = express()
const qrcode = require('qrcode')
// const mongoClient = require('mongodb').MongoClient

// const url = "mongodb://localhost:27017"

app.use(express.json())

// mongoClient.connect(url, (err, db) => {

//     if (err) {
//         console.log("Error while connecting mongo client")
//     } else {

//         const myDb = db.db('myDb')
//         const collection = myDb.collection('myTable')

//         app.post('/signup', (req, res) => {

//             const newUser = {
//                 name: req.body.name,
//                 email: req.body.email,
//                 password: req.body.password
//             }

//             const query = { email: newUser.email }

//             collection.findOne(query, (err, result) => {

//                 if (result == null) {
//                     collection.insertOne(newUser, (err, result) => {
//                         res.status(200).send()
//                     })
//                 } else {
//                     res.status(400).send()
//                 }

//             })

//         })

//         app.post('/login', (req, res) => {

//             const query = {
//                 email: req.body.email, 
//                 password: req.body.password
//             }

//             collection.findOne(query, (err, result) => {

//                 if (result != null) {

//                     const objToSend = {
//                         name: result.name,
//                         email: result.email
//                     }

//                     res.status(200).send(JSON.stringify(objToSend))

//                 } else {
//                     res.status(404).send()
//                 }

//             })

//         })

//     }

// })
app.get('/', (req, res) => {
    const objToSend = {
        name: "VISHESH",
        email: "Good@gmail.com"
    }
    res.status(200).send(JSON.stringify(objToSend))
    console.log('good')
})
app.get('/checkconnection', (req, res) => {
    const objToSend = {
        name: "Manan",
        email: "Good@gmail.com"
    }
    res.status(200).send(JSON.stringify(objToSend))
    console.log('good')
})

app.post('/patient/qrcode', (req, res) => {
    const url = req.body.url
    qrcode.toDataURL(url, (err, src) => {
        if (err) {
            console.log('Error while generating qrCode')
        }
        else {
            console.log(src)
            res.send(src)
        }
    })
})


app.listen(process.env.PORT || 5000, () => {


});