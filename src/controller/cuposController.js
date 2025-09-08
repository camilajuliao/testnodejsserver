import Cupos from "../models/Cupos.js";

export const getCuposByMovilNumber = async (req, res) => {
    try {
        const { mobileNumber } = req.mobileNumber;
        console.log(mobileNumber);
        const cupos = await Cupos.getCuposByMovilNumber(mobileNumber);
        if (cupos.length === 0) {
            return res.status(404).json({ message: 'No se encontraron cupos para el número móvil proporcionado', data: null, error: '', success: false });
        }else{
            res.status(200).json({ message: 'Cupos encontrados', data: { cupos: cupos }, error: '', success: true });
        }
       
    }catch (error) {
        res.status(500).json({ message: 'Error en el servidor', data: null, error: error.message, success: false });
    }
}
