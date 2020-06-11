<template>
  <div class="todo-list">
    <v-container>
      <v-row>
        <v-col lg="4" md="6" xs="12" 
            v-for="todo in todos" :key="todo.id">
            <Todo :todoId="todo.id" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Todo from './Todo'
import { mapGetters } from "vuex";

export default {
    components: {
        Todo,
    },

    computed: {
        ...mapGetters(["getAllTodos"])
    },

    methods: {
        //...mapActions(["fetchAllTasks"]),

        setTodos() {
            this.todos = this.getAllTodos;
        }
    },

    created() {
        this.setTodos()
    },

    data: () => {
        return {
            todos: []
        }
    }
};
</script>

<style>
</style>