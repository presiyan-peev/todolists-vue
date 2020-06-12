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
        },

        UPDATE_TASK: (state, val) => {
            state.tasks = state.tasks.filter(x => x.id != val.id)
            state.tasks.push(val)
        },

        REMOVE_TASK: (state, val) => {
            state.tasks = state.tasks.filter(x => x.id != val)
            
            //I do this to trigger the Getter
            state.tasks.push('a')
            state.tasks.pop('a')
        },
    },

    actions: {
        async fetchAllTasks({ commit }) {
            await TasksService.fetchAllTasks().then((res) => {
                commit('ADD_TASKS', res)
            })
        },

        async postTasks({ commit }, tasks) {
            for(const task of tasks){
                await TasksService.postTask(task).then(() => {
                    commit('ADD_TASK', task)
                })
            }
        },

        /** TO DO
            Move this logic to the backend
         */
        async updateTasks({ commit }, tasks) {
            for(const task of tasks){
                const response = await TasksService.updateTask(task).then((res) => {
                    if(res != 404){
                        commit('UPDATE_TASK', task)
                    }
                    return res
                })
                if (response == 404) {
                    await TasksService.postTask(task).then(() => {
                        commit('ADD_TASK', task)
                    })
                }
            }
        },
        
        /**
         * tasks is an array of task IDs
         */
        async deleteTasks({ commit }, tasks) {
            for(const task of tasks) {
                await TasksService.deleteTask(task).then(() => {
                    commit('REMOVE_TASK', task)
                })
            }
        }
    }
}