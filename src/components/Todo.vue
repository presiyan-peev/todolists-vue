<template>
  <div class="single-todo">
      <v-card
            max-width="344"
            class="mx-auto"
        >
            <v-list-item>
            <v-list-item-avatar color="purple"></v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="headline">{{ todo.title }}</v-list-item-title>
                <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>

            <v-img
            :src="todo.image"
            height="194"
            ></v-img>

            <v-card-text>
                {{ todo.description }}
            </v-card-text>

            <v-card-actions>
            <v-btn
                text
                color="deep-purple accent-4"
                @click="navigateToTasks(todo.id)"
            >
                Read Tasks
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-trash-can</v-icon>
            </v-btn>
            </v-card-actions>
        </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {

    props: ['todoId'],

    computed: {
        ...mapGetters(["getAllTodos"])
    },
    
    methods: {
        setTodo() {
            let _todo = this.getAllTodos.find(x => x.id === this.todoId)
            this.todo = _todo
        },

        navigateToTasks(id) {
            this.$router.push({name: 'TodoView', params: {id: id}})
        }
    },

    mounted() {
        this.setTodo()
    },

    data: () => {
        return {
            todo: {}
        }
    }

}
</script>

<style>

</style>