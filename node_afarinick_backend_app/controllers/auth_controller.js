const { User } = require('../models/user_model')
const bcrypt = require('bcrypt')


// login user
loginUser = async (req, res) => {
    // get the username and password from the request body
    const { username, password } = req.body;

    // check if username and password are provided
    if (!username || !password) {
        return res
            .status(400)
            .json({ message: "Please provide both username and password" });
    }

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res
                .status(400)
                .json({ message: "Invalid username or password" });
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res
                .status(400)
                .json({ message: "Invalid username or password" });
        }
        res.status(200).json({ code: 200, message: "User logged in successfully" });
    } catch (error) {
        res.status(500).json({ message: "AN ERROR HAS OCCURED", error });
    }
}

// register user
registerUser = async (req, res) => {
    // get the username and password from the request body
    const { firstName, lastName, username, password } = req.body;

    // validate the fields
    if (!firstName || !lastName || !username || !password) {
        return res
            .status(400)
            .json({ message: "Please provide all required fields" });
    }

    try {
        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ ...req.body, password: hashedPassword });
        res.status(201).json({ message: "User created", user });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "AN ERROR HAS OCCURED", error });
    }
}

module.exports = {
    loginUser,
    registerUser
}