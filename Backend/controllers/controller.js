const db = require("../config/db.js")

const getTasks = (req, res) => {
    var sql = "SELECT * FROM tasks"

    db.all(sql, (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message })
            return
        }

        res.status(200).json({
            message: "success",
            data: rows,
        })
    })
}

const addTask = (req, res) => {
    const newTask = req.body
    var sql = "INSERT INTO tasks (text, day, reminder) VALUES (?,?,?)"
    var params = [newTask.text, newTask.day, newTask.reminder]

    db.run(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message })
            return
        }

        res.status(201).json({
            message: "success",
        })
    })
}

const deleteTask = (req, res) => {
    const taskId = req.params.id
    const sql = `DELETE FROM tasks WHERE id = '${taskId}'`

    db.run(sql, (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message })
            return
        }

        res.status(200).json({
            message: "success",
        })
    })
}

const updateTask = (req, res) => {
    const task = req.body

    const taskId = req.params.id
    const sql = `UPDATE tasks SET text=?, day=?, reminder=? WHERE id=?`
    const params = [task.text, task.day, task.reminder, taskId]

    db.run(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message })
            return
        }

        res.status(200).json({
            message: "success",
        })
    })
}

const toggleReminder = (req, res) => {
    const taskID = req.params.id
    const sql = `Update tasks SET reminder = NOT reminder WHERE id=${taskID}`

    db.run(sql, (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message })
            return
        }

        res.status(200).json({
            message: "success",
        })
    })
}

exports.getTasks = getTasks
exports.addTask = addTask
exports.deleteTask = deleteTask
exports.updateTask = updateTask
exports.toggleReminder = toggleReminder
