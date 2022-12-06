import express,{Router} from "express"

import {tourist_contoller} from "../controller/contoller.js"

export const tourist_router = Router()

tourist_router.post("/post", tourist_contoller.postone) 

tourist_router.get("/getall",tourist_contoller.getall)