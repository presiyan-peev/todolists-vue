import { TodoListService } from '../../services/todos.service'

export default {
    state: {
        allTodos: []
    },

    getters: {
        getAllTodos: (state) => state.allTodos,
        getTodoById: (state) => (id) => state.allTodos.find(x => x.id == id)
    },

    mutations: {
        SET_ALL_TODOS: (state, val) => {
            state.allTodos.push(...val)
        },

        ADD_TODO: (state, val) => {
            console.log("add")
            state.allTodos.push(val)
        },

        UPDATE_TODO: (state, val) => {
            console.log(`val.id: ${val.id}`)
            state.allTodos = state.allTodos.filter(x => x.id != val.id)
            state.allTodos.push(val)
        }
    },

    actions: {
        async fetchAll({ commit }) {
            await TodoListService.fetchAll().then((res) => {
                commit('SET_ALL_TODOS', res)
            })
        },

        async postTodo({ commit}, todo) {
            await TodoListService.postTodo(todo).then(() => {
                commit('ADD_TODO', todo)
            })
        },

        async updateTodo({ commit}, todo) {
            await TodoListService.updateTodo(todo).then(() => {
                commit('UPDATE_TODO', todo)
            })
        }
    }
}