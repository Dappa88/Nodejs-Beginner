import express,{Router} from "express"
import {auth} from "../controller/auth_controller.js"

export const auth_router = Router()

auth_router.post("/register",auth.register)


auth_router.post("/login",auth.login)

auth_router.get("/getuser",auth.getalluser)
// the iindex in the routr is to group all our routes
// login and regustration are post request 