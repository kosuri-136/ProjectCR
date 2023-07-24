const User = require("../Models/userModal");
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.send(user);
    } else {
      return res.status(400).json(error);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
exports.register = async (req, res) => {
  try {
    const newuser = new User(req.body);
    await newuser.save();
    res.send("User registered successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
};


// const User = require("../Models/userModal");
// const bcrypt = require("bcrypt");

// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ error: "Invalid credentials" });
//     }

//     // Compare the provided password with the hashed password in the database
//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({ error: "Invalid credentials" });
//     }

//     // Check if the email and password match the admin credentials
//     const ADMIN_EMAIL = "admin@example.com";
//     const ADMIN_PASS = "11111111";

//     if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
//       user.admin = true;
//     } else {
//       user.admin = false;
//     }

//     res.status(200).json(user);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// exports.register = async (req, res) => {
//   const { username, email, password, phone } = req.body;

//   try {
//     // Check if a user with the same email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "Email already exists" });
//     }

//     // Hash the password before storing it in the database
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     // Create a new user object with the hashed password
//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//       phone,
//       admin: false, // By default, set the admin status to false
//     });

//     // Save the new user to the database
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Server error" });
//   }
// };
