const sqlite3 = require("sqlite3").verbose()

const DBSOURCE = "db.sqlite"

const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log("Connected to the SQLite database")
        db.run(
            `
        CREATE TABLE tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            text TEXT,
            day TEXT,
            reminder BOOLEAN
        ); 
        `,
            (err) => {
                if (err) {
                    // Table already created
                } else {
                    // Table just created
                    var insert = `INSERT INTO tasks (text, day, reminder) VALUES (?,?,?)`

                    db.run(insert, [
                        "Doctors Appointment",
                        "March 5th at 2:30pm",
                        true,
                    ])
                    db.run(insert, [
                        "Meeting with boss",
                        "March 6th at 1:30pm",
                        true,
                    ])
                    db.run(insert, [
                        "Food shopping",
                        "March 7th at 2:00pm",
                        false,
                    ])
                }
            }
        )
    }
})

module.exports = db
