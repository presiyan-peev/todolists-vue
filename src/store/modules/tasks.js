import { TasksService } from '../../services/tasks.service'

export default {
    state: {
        tasks: []
    },

    getters: {
        getTasksByTodo: (state) => (todo) => state.tasks.filter(x => x.todoList == todo)
    },

    mutations: {
        ADD_TASKS: (state, val) => {
            console.log("SET")
            console.log(val)
            state.tasks.push(...val)
        }
    },

    actions: {
        async fetchAllTasks({ commit }) {
            await TasksService.fetchAllTasks().then((res) => {
                commit('ADD_TASKS', res)
            })
        },
    }
}