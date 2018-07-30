import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: []
    },
    getters: {
        appName: state => state.appName
    },
    mutations: {
        setTodos({state}, datas) {
            state.todos.push(datas);
        }
    },
    actions: {
        commitTodos({commit}, datas) {
            commit('setTodos', datas);
        }
    }
})