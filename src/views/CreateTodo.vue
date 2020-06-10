<template>
  <div class="create-todo">
    <Title>Create a new Todolist</Title>
    <CreateTodoForm />
  </div>
</template>

<script>
import Title from '../components/.helpers/Title'
import CreateTodoForm from '../components/CreateTodoForm'

export default {
components: {
  Title,
  CreateTodoForm,
}
}
</script>

<style>

</style>