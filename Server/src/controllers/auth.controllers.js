import prisma from '../lib/db.js'; 
import bcrypt from 'bcrypt';

const register = async (req, res) => {
  try {
    // Destructure fullName from the request body
    const { fullName, email, password } = req.body; 

    // Validation: Check that fullName, email, and password are provided
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if a user with the provided email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create the new user record with the provided fullName, email, and hashed password
    await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({ message: "Registration successful" });

  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { register };
