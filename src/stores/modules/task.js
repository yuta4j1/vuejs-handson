export default {
    namespaced: true,
    state: {
        tasks: [
            {
                id: 1,
                text: 'test1',
                remarks: 'hogehogehoge',
                dateTime: '2018/12/16',
                done: false
            },
            {
                id: 2,
                text: 'test2',
                remarks: 'fugafugafuga',
                dateTime: '2018/12/17',
                done: false
            },
            {
                id: 3,
                text: 'test3',
                remarks: 'barrrrrrrrrr',
                dateTime: '2018/12/18',
                done: false
            },
        ]
    },
    getters: {
        getTasks: (state) => {
            return state.tasks
        }
    },
    mutations: {
        setTasks: (state, data) => {
            state.tasks.push(data)
        }
    },
    actions: {
        addTask: ({commit}, data) => {
            commit('setTasks', data)
        }
    }
}