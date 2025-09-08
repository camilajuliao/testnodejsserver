import {getUserById } from '../controller/userController.js'

export const validateUserExist= async (req, res, next) => {
     const {id} = req.params;
  try {
     console.log(id);
     const user = await getUserById(id);
     console.log(user);
    if(user === null){
        return res.status(404).json({ message: 'Usuario no encontrado', data: null, error: 'Usuario no encontrado', success: false });
    }else{
        req.mobileNumber = user.mobileNumber; 
        next();
    }
  } catch (error) {
    res.status(401).json({ message: 'Error en el servidor',error : error.message, data: null,success:false });
  }
};
