<template>
    <div class="todo-view">
        <Title>{{ title }}</Title>
        <TasksList :todoId="$route.params.id"/>
        <v-btn @click="navigateToEditTodo">Edit This Todo</v-btn>
        <v-btn @click="showDeletion" class="error">Delete This Todo</v-btn>
        <DeleteTodoDialog :id="id"/>
    </div>
</template>

<script>
import TasksList from '../components/TasksList'
import Title from '../components/.helpers/Title'
import DeleteTodoDialog from '../components/DeleteTodoDialog'

import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        DeleteTodoDialog,
        TasksList,
        Title
    },

    computed: {
        ...mapGetters(['getTodoById'])
    },

    methods: {
        ...mapActions(['toggleDeleteDialog']), 

        setTodoData() {
            this.id = this.$route.params.id
            this.title = this.getTodoById(this.id).title
        },

        navigateToEditTodo() {
            this.$router.push({name: 'EditTodo', params: {id: this.id}})
        },

        showDeletion() {
            this.toggleDeleteDialog()
        }
    },

    created() {
        this.setTodoData()
    },

    data() {
        return {
            id: -1,
            title: ''
        }
    }
}
</script>

<style>

</style>