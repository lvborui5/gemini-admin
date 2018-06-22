import * as types from './mutation-types'
import * as fields from './storage-fields'
import localStorage from '../core/storage/local-storage'

const mutations = {
  [types.SET_TEST](state, newVal) {
    state.test = newVal
    localStorage.save(fields.STRONGE_TEST_KEY, newVal)
  },
  // app
  [types.TOGGLE_SIDEBAR](state) { // 切换菜单收起/打开
    state.sidebar.opened = !state.sidebar.opened
    localStorage.save(fields.STRONGE_SIDEBAR_OPENED_KEY, state.sidebar.opened)
  },
  [types.CLOSE_SIDEBAR](state, newVal) { // 收起菜单
    state.app.sidebar.opened = newVal
    localStorage.save(fields.STRONGE_SIDEBAR_OPENED_KEY, newVal)
  },
  [types.TOGGLE_DEVICE](state, newVal) { // 切换设备
    state.app.device = newVal
    localStorage.save(fields.STRONGE_DEVICE_KEY, newVal)
  },
  [types.SET_LANGUAGE](state, newVal) { // 切换语言
    state.app.language = newVal
    localStorage.save(fields.STRONGE_LANGUAGE_KEY, newVal)
  },
  // user
  [types.SET_CODE](state, newVal) { //
    state.user.code = newVal
    localStorage.save(fields.STRONGE_USER_CODE_KEY, newVal)
  },
  [types.SET_TOKEN](state, newVal) { //
  },
  [types.SET_INTRODUCTION](state, newVal) { //
  },
  [types.SET_SETTING](state, newVal) { //
  },
  [types.SET_STATUS](state, newVal) { //
  },
  [types.SET_NAME](state, newVal) { //
  },
  [types.SET_AVATAR](state, newVal) { //
  },
  [types.SET_ROLES](state, newVal) { //
  }
}

export default mutations
