import localForage from 'localforage'

localForage.config({
  driver: localForage.WEBSQL, // Force WebSQL; same as using setDriver() options:INDEXEDDB,WEBSQL,LOCALSTORAGE
  name: 'Gemini',
  version: 1.0,
  size: 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName: 'gemini01', // Should be alphanumeric, with underscores.
  description: 'gemini-core local data'
})

const WebSQL = {
  save: (key, obj, successCallback, errorCallback) => {
    if (undefined !== successCallback || typeof successCallback !== 'function') {
      successCallback = function (success) {
        // Do other things once the value has been saved.
      }
    }

    if (undefined !== errorCallback || typeof errorCallback !== 'function') {
      errorCallback = function (error) {
        // Do other things once the value has been saved.
        console.log(error)
      }
    }

    localForage.setItem(key, obj).then(successCallback).catch(errorCallback)
  }
}

export default WebSQL
