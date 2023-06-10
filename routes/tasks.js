const express = require("express")
const router = express.Router()
const {getAllTasks,postSingleTask,getSingleTask,patchSingleTask,deleteSingleTask} = require("../controller/tasks")

router.route("/").get(getAllTasks).post(postSingleTask)
router.route("/:id").get(getSingleTask).patch(patchSingleTask).delete(deleteSingleTask)

module.exports = router