<template>
    <div class="todo-view">
        <Title>{{ title }}</Title>
        <TasksList :todoId="$route.params.id"/>
        <v-btn @click="navigateToEditTodo">Edit This Todo</v-btn>
    </div>
</template>

<script>
import TasksList from '../components/TasksList'
import Title from '../components/.helpers/Title'

import { mapGetters } from 'vuex'

export default {
    components: {
        TasksList,
        Title
    },

    computed: {
        ...mapGetters(['getTodoById'])
    },

    methods: {
        setTodoData() {
            this.id = this.$route.params.id
            this.title = this.getTodoById(this.id).title
        },

        navigateToEditTodo() {
            this.$router.push({name: 'EditTodo', params: {id: this.id}})
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