// routes/users.js
const express = require('express')
const router = express.Router()

const userProfileDefaultData = {
    Name: 'S Sai Ganesh',
    UserName: '12b18saiganesh',
    DOB: '03-10-2004',
    Address: 'Neyveli, TamilNadu',
    EmailID: '12b18saiganesh@gmail.com',
    PhoneNo: '8668070230',
    Description: "I'm a CS Student",
}

router.get('/getUserData', (req, res) => {
    res.send(JSON.stringify(userProfileDefaultData))
})
// Define a route
router.get('/', (req, res) => {
    res.send('this is user route') // this gets executed when user visit http://localhost:3000/user
})

router.get('/101', (req, res) => {
    res.send('this is user 101 route') // this gets executed when user visit http://localhost:3000/user/101
})

router.get('/102', (req, res) => {
    res.send('this is user 102 route') // this gets executed when user visit http://localhost:3000/user/102
})

// export the router module so that server.js file can use it
module.exports = router