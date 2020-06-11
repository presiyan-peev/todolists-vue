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
            state.tasks.splice(0, state.tasks.length)
            state.tasks.push(...val)
        },

        ADD_TASK: (state, val) => {
            state.tasks.push(val)
        }
    },

    actions: {
        async fetchAllTasks({ commit }) {
            await TasksService.fetchAllTasks().then((res) => {
                commit('ADD_TASKS', res)
            })
        },

        async postTask({ commit }, tasks) {
            for(const task of tasks){
                await TasksService.postTask(task).then(() => {
                    commit('ADD_TASK', task)
                })
            }
        },
    }
}