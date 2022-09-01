const express = require('express')
const app = express()
const qrcode = require('qrcode')





const LoginPasswords = [
    {
        userName: "1111111111",
        password: "1234",
        type: "Patient",
        id: "1"
    },
    {
        userName: "2222222222",
        password: "1234",
        type: "Doctor",
        id: "4"
    },
    {
        userName: "3333333333",
        password: "1234",
        type: "Pharma",
        id: "7"
    }
]

const basicDetails = [
    {
        id: "1",
        name: "Ram",
        age: "22",
        phone: "8989090990",
        gender: "Male",
        type: "Patient"
    },
    {
        id: "2",
        name: "John",
        age: "21",
        phone: "8111111111",
        gender: "Male",
        type: "Patient"
    },
    {
        id: "3",
        name: "Jess",
        age: "20",
        phone: "898911111",
        gender: "Female",
        type: "Patient"
    },
    {
        id: "4",
        name: "DoctorRam",
        age: "22",
        phone: "8989090990",
        gender: "Male",
        type: "Doctor"
    },
    {
        id: "5",
        name: "DoctorJohn",
        age: "21",
        phone: "8111111111",
        gender: "Male",
        type: "Doctor"
    },
    {
        id: "6",
        name: "DoctorJess",
        age: "20",
        phone: "898911111",
        gender: "Female",
        type: "Doctor"
    },
    {
        id: "7",
        name: "PharmaJess",
        age: "20",
        phone: "898911111",
        gender: "Female",
        type: "Pharma"
    }
]



const prescriptionHistory = [
    {
        id: "1",
        doctorId: "4",
        patientId: "1",
        medicineName: "Crocin",
        timing: ["11AM", "7PM"],
        numberOfDays: "2",
        startDate: "22-08-2022"

    },
    {
        id: "1",
        doctorId: "4",
        patientId: "1",
        medicineName: "Crocin",
        timing: ["11AM", "7PM"],
        numberOfDays: "3",
        startDate: "22-08-2022"
    },
    {
        id: "1",
        doctorId: "4",
        patientId: "1",
        medicineName: "Crocin",
        timing: ["11AM", "7PM"],
        numberOfDays: "2",
        startDate: "22-08-2022"
    }
]

const appointments = [
    {
        id: "1",
        patientId: "1",
        doctorId: "4",
        time: "4PM"
    },
    {
        id: "1",
        patientId: "2",
        doctorId: "5",
        time: "5PM"
    },
    {
        id: "1",
        patientId: "3",
        doctorId: "6",
        time: "6PM"
    }
]

// const mongoClient = require('mongodb').MongoClient

// const url = "mongodb://localhost:27017"

app.use(express.json())


app.get('/', (req, res) => {
    const objToSend = {
        name: "VISHESH",
        email: "Good@gmail.com"
    }
    res.status(200).send(JSON.stringify(objToSend))
    console.log('good')
})
//Appointments
app.get('/appointment', (req, res) => {
    const patientId = req.query.patientId;
    console.log(req.query)
    const objToSend = {
        prescriptions: []
    }
    prescriptionHistory.forEach(element => {
        if (element.patientId == patientId) {
            objToSend.prescriptions.push(element)
        }
    })
    res.status(200).send(JSON.stringify(objToSend))

})

//PatientDetails
app.get('/basicdetails', (req, res) => {
    const id = req.query.id;
    console.log(req.query)
    basicDetails.forEach(element => {
        if (element.id == id) {
            res.status(200).send(JSON.stringify(element))
        }
    })
    const mess = {
        message: "No User Found"
    }
    res.status(500).send(JSON.stringify(mess));

})

app.get('/medications', (req, res) => {
    const patientId = req.query.patientId;
    console.log(req.query)
    const objToSend = {
        prescriptions: []
    }
    prescriptionHistory.forEach(element => {
        if (element.patientId == patientId) {
            objToSend.prescriptions.push(element)
        }
    })
    res.status(200).send(JSON.stringify(objToSend))


})

//login

app.post('/login', (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    LoginPasswords.forEach(element => {
        if (element.userName == userName && element.password == password) {
            const objToSend = {
                type: element.type,
                id: element.id
            }
            res.status(200).send(JSON.stringify(objToSend))
        }
    })


    const mess = {
        message: "Wrong Credentials"
    }
    res.status(500).send(JSON.stringify(mess));


})


app.post('/patient/qrcode', (req, res) => {
    const url = req.body.url
    qrcode.toDataURL(url, (err, src) => {
        if (err) {
            console.log('Error while generating qrCode')
        }
        else {
            const objToSend = {
                source: src
            }
            res.status(200).send(JSON.stringify(objToSend))
        }
    })
})


app.listen(process.env.PORT || 5000, () => {


});