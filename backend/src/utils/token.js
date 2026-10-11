import jwt from "jsonwebtoken";

export const generateAccessToken = async(user)=>{
    return jwt.sign(
    {
        sub:user._id,
        role:user.role,
    },
    process.env.JWT_SECRET,
    {
        expiresIn:"15m",
    }
);
}

export const generateRefreshToken = async(user)=>{
    return jwt.sign(
        {
            sub:user._id,
        },
        process.env.JWT_REFRESH_SECRET,
        {
            expiresIn:"7d",
        }
    )
}

export const verifyAccessToken = (token)=>{
    return jwt.verify(token,process.env.JWT_SECRET);
}

export const verifyRefreshToken = (token)=>{
    return jwt.verify(token,process.env.JWT_REFRESH_SECRET);
}