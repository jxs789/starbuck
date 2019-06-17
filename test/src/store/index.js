import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import request from '../utiles/request'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        user
    },
    state:{
        num:0
    },
    mutations:{
        setNum(state){
            state.num++;
        }
    },
    getters:{
        
    },
    actions:{

    }
})

export default store