<template>
    <div class="todo-view">
        <v-list two-line subheader>
            <v-subheader inset>Tasks</v-subheader>

            <v-list-item
                v-for="task in tasks"
                :key="task.id"
            >

                

                <v-list-item-content>
                <v-list-item-title v-text="task.title"></v-list-item-title>
                <v-list-item-subtitle v-text="task.description"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                    <div>
                    <v-btn icon class="ml-2">
                        <v-icon color="green lighten-1">mdi-sticker-check-outline</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon color="red darken-1">mdi-sticker-remove-outline</v-icon>
                    </v-btn>
                    </div>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    props: [
        'todoId'
    ],

    computed: {
        ...mapGetters(["getTasksByTodo"])
    },

    methods: {
        //...mapActions(["fetchAllTasks"]),

        setTasks() {
            this.tasks = this.getTasksByTodo(this.todoId);
        }
    },

    created() {
        this.setTasks()
    },

    data: () => {
        return {
            tasks: []
        }
    }
}
</script>

<style>

</style>