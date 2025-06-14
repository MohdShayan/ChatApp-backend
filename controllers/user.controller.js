import USER from "../models/user.model.js";

export const HandleUserSignup = async (req, res) => {
  const { name, email, password } = req.body;
  

  if (!name || !email || !password) {
    return res.status(400).send({
      success: false,
      message: "Please fill all the fields",
    });
  }

  if (!req.file) {
    return res.status(400).send({
      success: false,
      message: "Please upload a profile picture",
    });
  }

  const existingUser = await USER.findOne({
    email: email,
  });
  if (existingUser) {
    return res.status(400).send({
      success: false,
      message: "User already exists,Please login",
    });
  }

  const profilePicURL = req.file.path;

  try {
    await USER.create({
      name,
      email,
      password,
      profilePic: profilePicURL,
    });

    res.status(201).send({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};


export const HandleUserLogin = async (req, res) => {
    const {email, password} = req.body;
 

    if(!email || !password){
        return res.status(400).send({
            success: false,
            message: "Please fill all the fields",
    }
)
    }

    const token = await USER.comparePasswordAndGenerateAuthToken(email, password);
 

    if (!token) {
        return res.status(400).send({
            success: false,
            message: "Invalid email or password",
        });
    }

    return res.status(200).cookie("authToken",token,{
         httpOnly: true,      
        sameSite: "None",    
        secure: true,  
        maxAge: 60 * 60 * 1000, 
    }).json({
        success: true,
        message: "User logged in successfully",
    })

}