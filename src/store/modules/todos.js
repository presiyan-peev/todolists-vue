import { TodoListService } from '../../services/todos.service'

export default {
    state: {
        allTodos: []
    },

    getters: {
        getAllTodos: (state) => state.allTodos
    },

    mutations: {
        SET_ALL_TODOS: (state, val) => {
            console.log("SET")
            console.log(val)
            state.allTodos.push(...val)
        }
    },

    actions: {
        async fetchAll({ commit }) {
            await TodoListService.fetchAll().then((res) => {
                commit('SET_ALL_TODOS', res)
            })
        }
    }
}