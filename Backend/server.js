const express = require("express")
const cors = require("cors")
const db = require("./config/db.js")
const route = require("./routes/route.js")

const path = __dirname + "/views"

const app = express()

app.use(express.json())
app.use(
    cors({
        origin: ["http://localhost:5173"],
    })
)

app.use(express.static(path))

app.get("/", (req, res) => {
    res.sendFile(path + "index.html")
})

app.use("/api/tasks", route)

const port = 5000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

exports.db = db
