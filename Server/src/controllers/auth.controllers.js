import prisma from '../lib/db.js'; 
import bcrypt from 'bcrypt';

// Register Controller
const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Validate inputs
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword
      }
    });

    return res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Login Controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Return user data (no token)
    return res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName
      }
    });
  } catch (error) {
    console.error("Login failed:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export { register, login };
