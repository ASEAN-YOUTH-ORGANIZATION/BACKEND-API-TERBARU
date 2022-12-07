import express from "express"
import { createRelawan, deleteRelawan, getAllRelawan, getAllRelawanByUser, getRelawanById, updateRelawan } from '../controllers/RelawanController.js'
import { VerifyJWT } from "../middlewares/VerifyJWT.js"
import { VerifyRoles } from "../middlewares/VerifyRoles.js"
import AuthRoles from "../config/AuthRoles.js"
import RelawanValidation from "../validations/RelawanValidation.js"
import ValidationResult from "../validations/ValidationResult.js"

const RelawanRoutes = express.Router()

RelawanRoutes.get('/', getAllRelawan)
RelawanRoutes.get('/:id', getRelawanById)
RelawanRoutes.get('/by-user/:id', getAllRelawanByUser)
RelawanRoutes.post('/', RelawanValidation, ValidationResult, createRelawan)
RelawanRoutes.put('/:id', VerifyJWT, VerifyRoles(AuthRoles.admin), updateRelawan)
RelawanRoutes.delete('/:id', VerifyJWT, VerifyRoles(AuthRoles.admin), deleteRelawan)
export default RelawanRoutes