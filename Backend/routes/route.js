const { Router } = require("express")
const {
    addTask,
    getTasks,
    deleteTask,
    updateTask,
    toggleReminder,
} = require("../controllers/controller")

const router = Router()

router.route("/").get(getTasks).post(addTask)
router.route("/:id").delete(deleteTask).patch(updateTask)
router.route("/:id/toggle").patch(toggleReminder)

module.exports = router
