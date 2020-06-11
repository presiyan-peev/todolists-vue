import ApiService from './api.service'

const TodoListService = {
    
    fetchAll: async function() {

        const requestData = {
            method: 'get',
            url: "/todos/"
        }

        const response = await ApiService.customRequest(requestData)

        return response.data
    },

    postTodo: async function(todo) {

        const requestData = {
            method: 'post',
            url: "/todos/",
            data: todo
        }

        const response = await ApiService.customRequest(requestData)

        return response.data
    },
}

export { TodoListService }