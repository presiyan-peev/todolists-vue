<template>
    <div class="todo-view">
        <v-list two-line subheader>
            <v-subheader inset>Tasks</v-subheader>

            <v-list-item
                v-for="task in tasks"
                :key="task.id"
            >
                <v-list-item-avatar>
                <v-icon
                    v-text="task.icon"
                ></v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                <v-list-item-title v-text="task.title"></v-list-item-title>
                <v-list-item-subtitle v-text="task.description"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    props: [
        'todoId'
    ],

    computed: {
        ...mapGetters(["getTasksByTodo"])
    },

    methods: {
        ...mapActions(["fetchAllTasks"]),

        async setTasks() {
            await this.fetchAllTasks()
            this.tasks = this.getTasksByTodo(this.todoId);
            console.log("tasks")
            console.log(this.tasks)
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