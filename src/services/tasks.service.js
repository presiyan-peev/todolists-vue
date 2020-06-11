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

    postTask: async function(task) {

        const requestData = {
            method: 'post',
            url: "/tasks/",
            data: task
        }

        const response = await ApiService.customRequest(requestData)

        return response.data
    },
}

export { TasksService }