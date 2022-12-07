import { Router } from "express"
import AuthRoutes from "./AuthRoutes.js"
import UserRoutes from './UserRoutes.js'
import RelawanRoutes from "./RelawanRoutes.js"
import EventRoutes from "./EventRoutes .js"

const routers = Router()

routers.use('/auth', AuthRoutes)
routers.use('/relawan', RelawanRoutes)
routers.use('/users', UserRoutes)
routers.use('/event', EventRoutes)

export default routers