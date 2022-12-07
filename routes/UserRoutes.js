import express from "express"
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/UserController.js"
import { VerifyJWT } from "../middlewares/VerifyJWT.js"
import { VerifyRoles } from "../middlewares/VerifyRoles.js"
import AuthRoles from "../config/AuthRoles.js"
import UserValidation from "../validations/UserValidation.js"
import ValidationResult from "../validations/ValidationResult.js"

const UserRoutes = express.Router()

UserRoutes.get('/', VerifyJWT, getAllUsers)
UserRoutes.get('/:id', VerifyJWT, getUserById)
UserRoutes.post('/', VerifyJWT, VerifyRoles(AuthRoles.admin), UserValidation, ValidationResult, createUser)
UserRoutes.put('/:id', VerifyJWT, VerifyRoles(AuthRoles.admin), UserValidation, ValidationResult, updateUser)
UserRoutes.delete('/:id', VerifyJWT, VerifyRoles(AuthRoles.admin), deleteUser)

export default UserRoutes