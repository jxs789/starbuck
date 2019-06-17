import api from '@/api/'

export default {
    namespaced: true,//命名空间
    state: {
        userinfo: []
    },
    mutations: {
        getUser(state,data) {
            state.userinfo=data
        }
    },
    actions: {
        getUserInfo({ commit }) {
            //成功要改变userInfo
            api.isLogin().then(res => {
                commit('getUser', res.data)
            })
        }
    }
}