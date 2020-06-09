<template>
    <div class="todo-view">
        <TasksList :todoId="$route.params.id"/>
    </div>
</template>

<script>
import TasksList from '../components/TasksList'

export default {
    components: {
        TasksList,
    }
}
</script>

<style>

</style>