import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModels from "../models/userModels.js";
import JWT from "jsonwebtoken";

export const registerController = async(req,res) => {
    try{
        const {name,email,password,phone,address} = req.body;
        if(!name){
            return res.send({error:'Name is required'})
        }
        if(!email){
            return res.send({error:'Email is required'})
        }
        if(!password){
            return res.send({error:'Password is required'})
        }
        if(!phone){
            return res.send({error:'Phone Number is required'})
        }
        if(!address){
            return res.send({error:'Address is required'})
        }

        const exisitingUser = await userModels.findOne({ email });

        if (exisitingUser) {
            return res.status(200).send({
              success: true,
              message: "Already registerd please login",
            });
        }
        const hashedPassword = await hashPassword(password);

        const user = await new userModels({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
          }).save();
      
          res.status(201).send({
            success: true,
            message: "User Register Successfully",
            user,
          });


        

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message: "Error in Registeration",
            error
        })

    }
};


export const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid email or password",
        });
      }
      const user = await userModels.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email is not registerd",
        });
      }
      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.status(200).send({
          success: false,
          message: "Invalid Password",
        });
      }
      const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.status(200).send({
        success: true,
        message: "login successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
        },
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
  };

export const testController = (req,res) =>{
    res.send('protected routes')
}