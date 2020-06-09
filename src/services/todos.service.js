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
}

export { TodoListService }