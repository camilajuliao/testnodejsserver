import User from '../models/User.js';


export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.getAllUsers();
        if (allUsers.length === 0) {
            return res.status(404).json({ message: 'No se encontraron usuarios ', data: null, error: '', success: false });
        }else{
            res.status(200).json({ message: 'Usuarios encontrados', data: { users: allUsers }, error: '', success: true });
        }
       
    }catch (error) {
        res.status(500).json({ message: 'Error en el servidor', data: null, error: error.message, success: false });
    }
}

export   const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("the current id is");
        const user = await User.getUserById(id);
        console.log(user);

        if (!user) {
            return user
        }else{
            return null
        }
       
    }catch (error) {
       return null
    }
}
