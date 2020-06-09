<template>
  <div class="todo-list">
    <v-container>
      <v-row>
        <v-col lg="4" md="6" xs="12" 
            v-for="todo in getAllTodos" :key="todo.id">
            <Todo :todoId="todo.id" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Todo from './Todo'
import { mapActions, mapGetters } from "vuex";

export default {
    components: {
        Todo,
    },

    computed: {
        ...mapGetters(["getAllTodos"])
    },

    methods: {
        ...mapActions(["fetchAll"])
    },

    created() {
        this.fetchAll();
    }
};
</script>

<style>
</style>