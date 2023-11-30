<template>
    <div class="container">
        <Header title="Task Tracker" />
        <AddTask v-show="store.showAddTask" />
        <Tasks :tasks="store.tasks" />
        <EditTask v-show="store.showEditTask" />
    </div>
</template>

<script lang="ts">
import { store } from "./store"

import Header from "./components/Header.vue"
import Tasks from "./components/Tasks.vue"
import AddTask from "./components/AddTask.vue"
import EditTask from "./components/EditTask.vue"

export interface ITask {
    id?: string
    text: string
    day?: string
    reminder: boolean
}

export default {
    components: {
        Header,
        Tasks,
        AddTask,
        EditTask,
    },
    data() {
        return {
            store,
        }
    },
    async created() {
        // const res = await fetch("http://localhost:5000/api/tasks")
        try {
            const res = await fetch("http://localhost:5000/api/tasks")
            console.log(res)
            const tasks = await res.json()
            store.tasks = tasks.data
        } catch (e) {
            console.error(e)
        }
    },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: "Poppins", sans-serif;
}

.container {
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
}

.btn {
    display: inline-block;
    background: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
}

.btn:focus {
    outline: none;
}

.btn:active {
    transform: scale(0.98);
}

.btn-block {
    display: block;
    width: 100%;
}
</style>
