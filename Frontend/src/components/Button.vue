<template>
    <button @click="handleClick" :style="{ background: color }" class="btn">
        {{ text }}
    </button>
</template>

<script lang="ts">
import { store } from "@/store"

export default {
    props: {
        text: String,
        color: String,
        opened: Boolean,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        handleClick() {
            if (this.opened) {
                store.showAddTask = false
                store.showEditTask = false
            } else {
                store.showAddTask = true
            }
        },
    },
}
</script>

<style scoped>
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
