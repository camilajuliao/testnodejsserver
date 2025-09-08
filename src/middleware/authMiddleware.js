

export const validateJwt= (req, res, next) => {
  try {
    // This is a dummy condition, for the purposes of this test. But this API' should be protected with a JWT 
    if(true){
        next();
    }
  } catch (error) {
    res.status(401).json({ message: 'Token inválido',error : error.message, data: null,success:false });
  }
};