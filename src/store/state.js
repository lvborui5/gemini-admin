import * as fields from './storage-fields'
import localStorage from '../core/storage/local-storage'

const state = {
  test: localStorage.get(fields.STRONGE_TEST_KEY) || 'test',
  app: {
    sidebar: {
      opened: true,
      withoutAnimation: false
    },
    device: 'desktop',
    language: localStorage.get(fields.STRONGE_LANGUAGE_KEY) || 'en'
  },
  user: {
    user: '',
    status: '',
    code: '',
    token: null,
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  }
}

export default state
