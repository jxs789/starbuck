//统一管理接口
import request from '@/utiles/request'

const api = {
    isLogin: () => request.get('/api/user/info'),
    userLogin: (data) => request.post('/api/login', data),
    homeData: (data) => request.get('/api/task/list', data),
    overtimeDetail: (data) => request.get('/api/apply/overtime', data),
    vacationDetail: (data) => request.get('/api/apply/vacation', data),
}

export default api