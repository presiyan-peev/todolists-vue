import { TodoListService } from '../../services/todos.service'

export default {
    state: {
        allTodos: [],

        deletionDialog: false,
    },

    getters: {
        getAllTodos: (state) => state.allTodos,
        getTodoById: (state) => (id) => state.allTodos.find(x => x.id == id),

        showDeletionDialog: (state) => state.deletionDialog
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
            state.allTodos = state.allTodos.filter(x => x.id != val.id)
            state.allTodos.push(val)
        },

        REMOVE_TODO: (state, val) => {
            state.allTodos = state.allTodos.filter(x => x.id != val)
            
            //I do this to trigger the Getter
            state.allTodos.reverse()
            console.log(state.allTodos.length)
            console.log(val)
            console.log("mut")
        },


        TOGGLE_DEL_DIALOG: (state) => {
            state.deletionDialog = !state.deletionDialog
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
        },

        async deleteTodo({ commit}, todoId) {
            await TodoListService.deleteTodo(todoId).then(() => {
                commit('REMOVE_TODO', todoId)
            })
        },


        toggleDeleteDialog({ commit }) {
            commit('TOGGLE_DEL_DIALOG')
        }
    }
}