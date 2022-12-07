import express from "express"
import { login, logout, refreshToken, register } from '../controllers/AuthController.js'
import { VerifyJWT } from "../middlewares/VerifyJWT.js"
import LoginValidation from "../validations/LoginValidation.js"
import UserValidation from "../validations/UserValidation.js"
import ValidationResult from "../validations/ValidationResult.js"

const AuthRoutes = express.Router()

AuthRoutes.post('/register', UserValidation, ValidationResult, register)
AuthRoutes.post('/login', LoginValidation, ValidationResult, login)
AuthRoutes.get('/refresh', refreshToken)
AuthRoutes.get('/logout', logout)

export default AuthRoutes