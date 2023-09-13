<template>
    <div
        @dblclick="store.toggleReminder(task.id!)"
        :class="[task.reminder ? 'reminder' : '', 'task']"
    >
        <h3>
            {{ task.text }}
            <div>
                <i @click="editTask(task.id!)" class="fas fa-pencil"></i>
                <i @click="deleteTask(task.id!)" class="fas fa-times"></i>
            </div>
        </h3>
        <p>{{ task.day }}</p>
    </div>
</template>

<script lang="ts">
import type { ITask } from "@/App.vue"
import type { PropType } from "vue"

import { store } from "@/store"

export default {
    data() {
        return {
            store,
        }
    },
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true,
        },
    },
    methods: {
        deleteTask(id: string) {
            if (confirm("Are you sure?")) {
                store.deleteTask(id)
            }
        },
        editTask(id: string) {
            store.editId = id
            store.editText = this.task.text
            store.editDay = this.task.day || ""
            store.editReminder = this.task.reminder
            store.showEditTask = true
            this.$forceUpdate()
        },
    },
}
</script>

<style scope>
.fas {
    margin-left: 1rem;
}

.fa-times {
    color: red;
}

.task {
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}

.task.reminder {
    border-left: 5px solid green;
}

.task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
