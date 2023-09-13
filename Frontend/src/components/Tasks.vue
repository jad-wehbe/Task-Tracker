<template>
    <div v-if="tasks && tasks.length > 0">
        <div :key="task.id" v-for="task in tasks">
            <h3>
                <Task :task="task" />
            </h3>
        </div>
    </div>
    <div v-else>
        <h3>There is no tasks</h3>
    </div>
</template>

<script lang="ts">
import type { ITask } from "@/App.vue"
import type { PropType } from "vue"

import Task from "./Task.vue"

export default {
    props: {
        tasks: Array as PropType<ITask[]>,
    },
    components: {
        Task,
    },
}
</script>
