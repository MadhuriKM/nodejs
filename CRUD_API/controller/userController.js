
// read all users
const readAll = function(req,res) {
    res.status(200).json({ status: true, msg: "read all user"})
}

// read single user
const readSingle = function(req,res) {
    res.status(200).json({ status: true, msg: "read single user"})
}

// create new user
const createUser = function(req,res) {
    res.status(201).json({ status: true, msg: "create new user"})
}

// update user
const updateUser = function(req,res) {
    res.status(201).json({ status: true,msg: "update existing user"})
}

// delete user
const deleteUser = function (req,res) {
    res.status(201).json({ status: true,msg: "delete existing user"})
}

module.exports = { readAll, readSingle, createUser, updateUser, deleteUser}