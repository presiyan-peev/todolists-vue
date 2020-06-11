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
                            <v-col cols="12">
                                <v-btn @click="addTask" small text :disabled="isAddBtnDisabled">Add a Task</v-btn>
                            </v-col>
                        </v-row>
                        <v-row v-for="(task, index) in tasks" :key="task.index">
                            
                            <v-col class="d-flex mr-auto" cols="10">
                                <v-text-field v-model="task.title" :rules="[rules.required]" label="Task Title" maxlength="20" required></v-text-field>
                            </v-col>    
                            <v-col class="d-flex mr-auto" cols="2">
                                <v-icon @click="removeTask(index)">mdi-trash-can</v-icon>
                            </v-col>
                            <v-col class="d-flex mr-auto" cols="12">
                                <v-text-field v-model="task.description" :rules="[rules.required]" label="Task description" maxlength="100" required></v-text-field>
                                
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="d-flex align-right" cols="6" sm="3" xsm="3">
                                <v-btn x-large block depressed :disabled="!valid" color="primary lighten-1" @click="validate">Submit</v-btn>
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
import { mapActions } from 'vuex'

export default {

    methods: {
        ...mapActions(['postTodo', 'postTask']),

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

        removeTask(index) {
            this.tasks.splice(index, 1)
        },

        validate() {
            if (this.$refs.todo.validate()) {
                // submit form to server/API here...
                this.postTodo({
                    id: this.id,
                    title: this.title,
                    description: this.description,
                    tasks: this.tasks.map(x => x.id),
                    image: this.image
                })
                this.postTask(this.tasks)
                console.log(this.title)
            }
        },
    },

    data: () => ({
        valid: true,
        isAddBtnDisabled: false,
        
        id: Date.now(),
        title: "",
        description: "",
        image: "",
        tasks: [],
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