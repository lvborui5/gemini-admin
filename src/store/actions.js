import * as actionTypes from './action-types'
import * as mutationTypes from './mutation-types'
import localStorage from '../core/storage/local-storage'

export default {
  async [actionTypes.SAVE_TEST]({ commit, state }, { test, other }) {
    commit(mutationTypes.SET_TEST, test)
    localStorage.save('other', other)
  }
}
