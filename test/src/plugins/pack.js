import myHeader from '../components/myHeader'
import mySection from '../components/mysection'

export default {
    install(Vue) {
        Vue.component('myHeader', myHeader)
        Vue.component('mySection', mySection)
    }
}