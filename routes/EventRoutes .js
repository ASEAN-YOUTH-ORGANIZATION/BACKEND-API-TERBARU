import express from "express"
import { createEvent, deleteEvent, getAllEvent, getEventById, updateEvent } from "../controllers/EventController.js"
import { VerifyJWT } from "../middlewares/VerifyJWT.js"
import { VerifyRoles } from "../middlewares/VerifyRoles.js"
import AuthRoles from "../config/AuthRoles.js"
import EventValidation from "../validations/EventValidation.js"
import ValidationResult from "../validations/ValidationResult.js"

const EventRoutes = express.Router()

EventRoutes.get('/', VerifyJWT, getAllEvent)
EventRoutes.get('/:id', VerifyJWT, getEventById)
EventRoutes.post('/', VerifyJWT, VerifyRoles(AuthRoles.admin), EventValidation, ValidationResult, createEvent)
EventRoutes.put('/:id', VerifyJWT, VerifyRoles(AuthRoles.admin), EventValidation, ValidationResult, updateEvent)
EventRoutes.delete('/:id', VerifyJWT, VerifyRoles(AuthRoles.admin), deleteEvent)
export default EventRoutes