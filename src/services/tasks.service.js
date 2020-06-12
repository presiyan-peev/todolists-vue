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

    updateTask: async function(task) {

        const requestData = {
            method: 'put',
            url: `/tasks/${task.id}`,
            data: task
        }

        const response = await ApiService.customRequest(requestData).then((res) =>{
            return res
        }).catch((err) => {
            return err
        })

        if(response.response && response.response.status == 404) {
            response.data = "404"
            return 404
        }
        return response.data
    },

    deleteTask: async function(taskId) {

        const requestData = {
            method: 'delete',
            url: `/tasks/${taskId}`,
        }

        const response = await ApiService.customRequest(requestData)

        return response.data
    },
}

export { TasksService }