import express from 'express'
import { getAllUsers } from './controller/userController.js'
import { validateJwt } from './middleware/authMiddleware.js'
import {validateUserExist} from './middleware/validateUserMiddleware.js'
import { getCuposByMovilNumber } from './controller/cuposController.js'


const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
//users
app.get('api/v1/user/get-all-users', validateJwt, getAllUsers);

//cupos
app.get('api/v1/users/:id/cupos', validateJwt, validateUserExist, getCuposByMovilNumber);
