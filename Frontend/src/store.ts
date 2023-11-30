import { reactive } from "vue"
import type { ITask } from "./App.vue"

export const store = reactive({
    tasks: [] as ITask[],

    editId: "",
    editText: "",
    editDay: "",
    editReminder: false,

    showAddTask: false,
    showEditTask: false,

    toggleShowAddTask() {
        this.showAddTask = !this.showAddTask
    },

    async editTask(id: string, text: string, day?: string, reminder = false) {
        const newTask: ITask = {
            text,
            day,
            reminder,
        }

        const temp = this.tasks.find((task) => task.id === id)

        if (temp) {
            temp.text = text
            temp.day = day
            temp.reminder = reminder
        }

        const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
        })
    },

    async deleteTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id)

        const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
            method: "DELETE",
        })
    },

    async toggleReminder(id: string) {
        const temp = this.tasks.find((task) => task.id === id)

        if (temp) {
            temp.reminder = !temp.reminder
        }

        const res = await fetch(
            `http://localhost:5000/api/tasks/${id}/toggle`,
            {
                method: "PATCH",
            }
        )
    },

    async addTask(text: string, day?: string, reminder = false) {
        const newTask: ITask = {
            text,
            day,
            reminder,
        }
        this.tasks.push(newTask)

        const res = await fetch(`http://localhost:5000/api/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text, day, reminder }),
        })
    },
})
