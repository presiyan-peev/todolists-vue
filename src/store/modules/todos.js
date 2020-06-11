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
            //state.allTodos.splice(0, state.allTodos.length)
            state.allTodos.push(...val)
        },

        ADD_TODO: (state, val) => {
            console.log("add")
            state.allTodos.push(val)
        }
    },

    actions: {
        async fetchAll({ commit }) {
            await TodoListService.fetchAll().then((res) => {
                commit('SET_ALL_TODOS', res)
            })
        },

        // receives "success" msg from API function
        async postTodo({ commit}, todo) {
            await TodoListService.postTodo(todo).then(() => {
                console.log("kyp")
                commit('ADD_TODO', todo)
            })
        }
    }
}