import localforage from 'localforage'

localforage.config({
  driver: localforage.LOCALSTORAGE, // Force WebSQL; same as using setDriver() options:INDEXEDDB,WEBSQL,LOCALSTORAGE
  name: 'Gemini',
  version: 1.0,
  // size: 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName: 'gemini01', // Should be alphanumeric, with underscores.
  description: 'gemini-core local data'
})

const localStorage = {
  save: (key, obj, successCallback, errorCallback) => {
    if (undefined === successCallback || typeof successCallback !== 'function') {
      successCallback = function(success) {
        // Do other things once the value has been saved.
      }
    }

    if (undefined === errorCallback || typeof errorCallback !== 'function') {
      errorCallback = function(error) {
        // Do other things once the value has been saved.
        console.log(error)
      }
    }

    localforage.setItem(key, obj).then(successCallback).catch(errorCallback)
  },
  get: (key, successCallback, errorCallback) => {
    if (undefined === successCallback || typeof successCallback !== 'function') {
      successCallback = function(success) {
        // Do other things once the value has been saved.
      }
    }

    if (undefined === errorCallback || typeof errorCallback !== 'function') {
      errorCallback = function(error) {
        // Do other things once the value has been saved.
        console.log(error)
      }
    }

    return localforage.getItem(key).then(successCallback).catch(errorCallback)
  },
  delete: (key, successCallback, errorCallback) => {
    if (undefined === successCallback || typeof successCallback !== 'function') {
      successCallback = function(success) {
        // Do other things once the value has been saved.
      }
    }

    if (undefined === errorCallback || typeof errorCallback !== 'function') {
      errorCallback = function(error) {
        // Do other things once the value has been saved.
        console.log(error)
      }
    }

    localforage.removeItem(key).then(successCallback).catch(errorCallback)
  },
  clear: (successCallback, errorCallback) => {
    if (undefined === successCallback || typeof successCallback !== 'function') {
      successCallback = function(success) {
        // Do other things once the value has been saved.
      }
    }

    if (undefined === errorCallback || typeof errorCallback !== 'function') {
      errorCallback = function(error) {
        // Do other things once the value has been saved.
        console.log(error)
      }
    }

    localforage.clear().then(successCallback).catch(errorCallback)
  },
  size: (successCallback, errorCallback) => {
    if (undefined === successCallback || typeof successCallback !== 'function') {
      successCallback = function(success) {
        // Do other things once the value has been saved.
      }
    }

    if (undefined === errorCallback || typeof errorCallback !== 'function') {
      errorCallback = function(error) {
        // Do other things once the value has been saved.
        console.log(error)
      }
    }

    localforage.length().then(successCallback).catch(errorCallback)
  },
  key: (index, successCallback, errorCallback) => {
    if (undefined === successCallback || typeof successCallback !== 'function') {
      successCallback = function(success) {
        // Do other things once the value has been saved.
      }
    }

    if (undefined === errorCallback || typeof errorCallback !== 'function') {
      errorCallback = function(error) {
        // Do other things once the value has been saved.
        console.log(error)
      }
    }

    localforage.key(index).then(successCallback).catch(errorCallback)
  },
  keys: (successCallback, errorCallback) => {
    if (undefined === successCallback || typeof successCallback !== 'function') {
      successCallback = function(success) {
        // Do other things once the value has been saved.
      }
    }

    if (undefined === errorCallback || typeof errorCallback !== 'function') {
      errorCallback = function(error) {
        // Do other things once the value has been saved.
        console.log(error)
      }
    }

    localforage.keys().then(successCallback).catch(errorCallback)
  },
  iterate: (iteration, successCallback, errorCallback) => {
    if (undefined === iteration || typeof iteration !== 'function') {
      throw Error('iteration must not null and is a function')
    }

    if (undefined === successCallback || typeof successCallback !== 'function') {
      successCallback = function(success) {
        // Do other things once the value has been saved.
      }
    }

    if (undefined === errorCallback || typeof errorCallback !== 'function') {
      errorCallback = function(error) {
        // Do other things once the value has been saved.
        console.log(error)
      }
    }

    localforage.iterate(iteration).then(successCallback).catch(errorCallback)
  }
}

export default localStorage
