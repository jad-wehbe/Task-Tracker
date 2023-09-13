<template>
    <header>
        <h1>{{ title }}</h1>
        <Button
            :text="
                store.showAddTask || store.showEditTask ? 'Close' : 'Add Task'
            "
            :color="store.showAddTask || store.showEditTask ? 'red' : 'green'"
            :opened="store.showAddTask || store.showEditTask"
        />
    </header>
</template>

<script lang="ts">
import { store } from "@/store"
import Button from "./Button.vue"

export default {
    props: {
        title: String,
    },
    data() {
        return {
            store,
        }
    },
    components: {
        Button,
    },
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>
