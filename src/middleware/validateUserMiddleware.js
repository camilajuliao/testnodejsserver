import User from '../models/User.js';


export const validateUserExist= async (req, res, next) => {
     const {id} = req.params;
  try {
     const user = await User.getUserById(id);
    if(user === null){
        return res.status(404).json({ message: 'Usuario no encontrado', data: null, error: 'Usuario no encontrado', success: false });
    }else{
          console.log(user.numero_movil);
        req.mobileNumber = user.numero_movil; 
        next();
    }
  } catch (error) {
    res.status(401).json({ message: 'Error en el servidor',error : error.message, data: null,success:false });
  }
};
