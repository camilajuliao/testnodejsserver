import {getUserById } from '../controller/UserController.js'

export const validateUserExist= async (req, res, next) => {
     const userId = req.params.id;
  try {
    const user = await getUserById(userId);
    if(user === null){
        return res.status(404).json({ message: 'Usuario no encontrado', data: null, error: 'Usuario no encontrado', success: false });
    }else{
        req.mobileNumber = user.mobileNumber; 
        next();
    }
  } catch (error) {
    res.status(401).json({ message: 'Token inválido',error : error.message, data: null,success:false });
  }
};