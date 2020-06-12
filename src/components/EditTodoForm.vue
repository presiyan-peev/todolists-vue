<template>
  <div class="create-todo-form">
      <v-row>
        <v-col cols="0" sm="3" md="3">
        </v-col>
        <v-col cols="12" sm="6" md="6">
            <v-card class="px-4">
                <v-card-text>
                    <v-form ref="todo" v-model="valid" lazy-validation>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="title" :rules="[rules.required]" label="Title" maxlength="20" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea v-model="description" :rules="[rules.required]" label="Description" maxlength="50" required></v-textarea>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="image" :rules="[rules.required]" label="Image url" maxlength="100" required></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row v-for="(task, index) in tasks" :key="task.index">
             
                            <v-col cols="12" class="px-2">
                                <v-card class="px-2">
                                    <v-row>
                                        <v-col class="d-flex mr-auto" cols="10">
                                            <v-text-field v-model="task.title" :rules="[rules.required]" label="Task Title" maxlength="20" required></v-text-field>
                                        </v-col>    
                                        <v-col class="d-flex mr-auto" cols="2">
                                            <v-icon @click="removeTask(index)">mdi-trash-can</v-icon>
                                        </v-col>
                                        <v-col cols="1"></v-col>
                                        <v-col cols="1"></v-col>
                                        <v-col class="d-flex mr-auto" cols="12">
                                            <v-text-field v-model="task.description" :rules="[rules.required]" label="Task description" maxlength="100" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                            
                        </v-row>
                        
                        <v-row>
                            <v-col cols="12">
                                <v-btn @click="addTask" color="primary" small text :disabled="isAddBtnDisabled">Add a Task</v-btn>
                            </v-col>
                            <v-col class="d-flex align-right" cols="6" sm="3" xsm="3">
                                <v-btn x-large block depressed :disabled="!valid" tile color="success lighten-2" @click="validate">Edit</v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="0" sm="3" md="3">
        </v-col>
    </v-row>  
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {

    computed: {
        ...mapGetters(['getTodoById', 'getTasksByTodo'])
    },

    methods: {
        ...mapActions(['updateTodo', 'updateTasks', 'deleteTasks']),

        setTodoData() {
            const todo = this.getTodoById(this.$route.params.id)
            this.id = todo.id
            this.title = todo.title
            this.description = todo.description
            this.image = todo.image
        },

        setTasksData() {
            this.tasks.push(...this.getTasksByTodo(this.id))
        },

        addTask() {
            this.isAddBtnDisabled = true
            this.tasks.push({
                id: Date.now(),
                title: '',
                description: '',
                todoList: this.id,
            })
            setTimeout(() => this.isAddBtnDisabled = false, 1100)
        },

        removeTask(index, id) {
            this.tasks.splice(index, 1)
            this.removedTasksIds.push(id)
        },

        validate() {
            if (this.$refs.todo.validate()) {
                this.updateTodo({
                    id: this.id,
                    title: this.title,
                    description: this.description,
                    tasks: this.tasks.map(x => x.id),
                    image: this.image
                })
                this.updateTasks(this.tasks)
                this.deleteTasks(this.removedTasksIds)
            }
        },
    },

    created() {
        this.setTodoData()
        this.setTasksData()
    },

    data: () => ({
        valid: true,
        isAddBtnDisabled: false,
        
        id: Date.now(),
        title: "",
        description: "",
        image: "",
        tasks: [],
        removedTasksIds: [],
        verify: "",
        rules: {
            required: value => !!value || "Required.",
            min: v => (v && v.length >= 8) || "Min 8 characters",
        }
    })
}
</script>

<style>

</style>