const User = require("../model/userModel");

const getUsers = async (req, res) => {
    const { _id } = req.params;
    const { name } = req.query;

    //search by id
    if (_id) {
        if (name && _id) {
            try {
                const data = await User.find({
                    $and: [
                        { _id },
                        { "firstName": { $regex: `${name}` } }
                    ]
                });
                res.json({ message: "success", data });
            } catch (err) {
                res.json({ message: "error", err });
            }
        }
        try {
            const data = await User.find({ _id });
            res.json({ message: "success", data });
        } catch (err) {
            res.json({ message: "error", err });
        }
    }

    //search by name
    else if (name) {
        try {
            const data = await User.find({
                $or: [
                    { "firstName": { $regex: `${name}` } },
                    { "lastName": { $regex: `${name}` } }
                ]
            },
                "email"
            );
            res.json({ message: "success", data });
        } catch (err) {
            res.json({ message: "error", err });
        }

        //get all users
    } else {
        try {
            const data = await User.find();
            res.json({ message: "success", data });
        } catch (err) {
            res.json({ message: "error", err });
        }
    }
};

//add user
const addUser = async (req, res) => {
    const { firstName, lastName, email, age } = req.body;
    try {
        const newUser = new User({ firstName, lastName, email, age });
        const addData = await newUser.save();
        res.json({ message: "add user success", addData });
    } catch (err) {
        res.json({ message: "error", err });
    }
}

//update user
const updateUser = async (req, res) => {
    const { _id } = req.params;
    const { firstName, lastName, email, age } = req.body;
    try {
        const updateData = await User.updateOne({ _id }, { "$set": { firstName, lastName, email, age } });
        res.json({ message: "update user success", updateData });
    } catch (err) {
        res.json({ message: "error", err });
    }
}

//delete user
const deleteUser = async (req, res) => {
    const { _id } = req.params;
    try {
        const deleteUser = await User.deleteOne({ _id });
        res.json({ message: "delete user success", deleteUser });
    } catch (err) {
        res.json({ message: "error", err });
    }
}

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
}