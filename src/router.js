const express = require("express");
const router = express.Router();
const TodoController = require("./controllers/TodoController");
const CateController = require("./controllers/CateController");
const UserController = require("./controllers/UserController");

router.get("/", function (request, response) {
    response.status(200).send("Hello, world!");
});

router.post("/register", UserController.create);

router.get("/categories", CateController.list);
router.get("/categories/:id", CateController.get);
router.get("/categories/:id", CateController.getTodos);
router.post("/categories", CateController.create);
router.post("/categories/:id", CateController.update);
router.delete("/categories/:id", CateController.del);
router.delete("/categories", CateController.delAll);

router.get("/todos", TodoController.list);
router.get("/todos/:id", TodoController.get);
router.post("/todos", TodoController.create);
router.post("/todos/:id", TodoController.updateTitleOnly);
router.post("/todos/:id/toggle", TodoController.updateStatusOnly);
router.delete("/todos/:id", TodoController.del);
router.delete("/todos", TodoController.delAll);

module.exports = router;