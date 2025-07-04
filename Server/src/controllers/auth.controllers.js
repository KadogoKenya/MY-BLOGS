import { PrismaClient } from 'prisma/client';
import bcrypt from 'bcrypt'; //for hasing the password-makes it appear in hash format

const prisma = new PrismaClient();

const signup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const existingUser = await prisma.user.findUnique({
            where: {email}
        });

        if(existingUser){
            return res.status(400).json({message: "user already existing"})
        }
        const harshedPassword = await bcrypt.hash(password,10)
        const user = prisma.user.create({
            data: {
                fullName,
                email,
                password:harshedPassword,
            },
        });
        return req.status(201).json({message: "user is created successfully",
            user:{
                id:user.id,
                email:user.email
            },
    });
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"internal server error"})
    }
    };


export default signup