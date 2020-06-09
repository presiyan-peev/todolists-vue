import ApiService from './api.service'

const TasksService = {
    
    fetchAllTasks: async function() {

        const requestData = {
            method: 'get',
            url: "/tasks/"
        }

        const response = await ApiService.customRequest(requestData)

        return response.data
    },
}

export { TasksService }