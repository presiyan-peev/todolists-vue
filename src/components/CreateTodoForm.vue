<template>
  <div class="create-todo-form">
      <TodoForm @submit-form="forwardData" /> 
  </div>
</template>

<script>
import TodoForm from './.helpers/TodoForm'

import { mapActions } from 'vuex'

export default {

    components: {
        TodoForm
    },

    methods: {
        ...mapActions(['postTodo', 'postTasks']),

        forwardData(data) {
            this.postTodo(data.todo)
            this.postTasks(data.tasks)
        },
    },
}
</script>

<style>

</style>