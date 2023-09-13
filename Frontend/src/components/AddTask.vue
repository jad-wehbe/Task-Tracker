<template>
    <form @submit="onsubmit" class="add-form">
        <div class="form-control">
            <label>Task</label>
            <input
                v-model="text"
                type="text"
                name="text"
                placeholder="Add Task"
            />
        </div>
        <div class="form-control">
            <label>Day & Time</label>
            <input
                v-model="day"
                type="text"
                name="day"
                placeholder="Add Day & Time"
            />
        </div>
        <div class="form-control form-control-check">
            <input
                v-model="reminder"
                type="checkbox"
                id="reminder"
                name="reminder"
            />
            <label for="reminder">Set Reminder</label>
        </div>

        <input type="submit" value="Save Task" class="btn btn-block" />
    </form>
</template>

<script lang="ts">
import { store } from "@/store"

export default {
    data() {
        return {
            store,
            text: "",
            day: "",
            reminder: false,
        }
    },
    methods: {
        onsubmit(e: Event) {
            e.preventDefault()
            if (!this.text) {
                alert("Please add a task")
                return
            }

            store.addTask(this.text, this.day, this.reminder)

            this.text = ""
            this.day = ""
            this.reminder = false
        },
    },
}
</script>

<style scoped>
.add-form {
    margin-bottom: 40px;
}

.form-control {
    margin: 20px 0;
}

.form-control label {
    display: block;
}

.form-control input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
}

.form-control-check {
    display: flex;
    gap: 0.3em;
    align-items: center;
}

.form-control-check label {
    display: inline-block;
}

.form-control-check input {
    height: 1em;
    width: 1em;
}
</style>
