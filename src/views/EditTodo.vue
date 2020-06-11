<template>
  <div class="edit-todo">
    <Title>Edit a new Todolist</Title>
    <EditTodoForm />
  </div>
</template>

<script>
import Title from '../components/.helpers/Title'
import EditTodoForm from '../components/EditTodoForm'

export default {
components: {
  Title,
  EditTodoForm,
}
}
</script>

<style>

</style>