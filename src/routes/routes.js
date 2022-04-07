const routes = require('express').Router();
const CatalogoController = require("../controllers/CatalogoController")


routes.get("/", CatalogoController.getAll)
routes.get("/signup", CatalogoController.signup)
routes.post("/create", CatalogoController.create)
routes.get("/getById/:id/:method", CatalogoController.getById)
routes.post("/update/:id", CatalogoController.update)
routes.get("/remove/:id", CatalogoController.remove)

module.exports = routes;