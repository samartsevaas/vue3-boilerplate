<script setup lang="ts">
import { computed } from "vue";
import { useTodoStore } from "../store/useTodoStore";

const todoStore = useTodoStore();

const todos = computed(() => {
  return todoStore.getAll;
});

const { isLoading } = todoStore.initialTodos();
</script>
<template>
  <div class="home">
    <h1>Home page</h1>
    <span v-if="isLoading">loading</span>
    <pre lang="json">{{ todos }}</pre>
  </div>
</template>
