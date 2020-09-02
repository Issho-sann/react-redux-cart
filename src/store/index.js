/*
 * @Description: 
 * @Author: linqibin
 * @Date: 2020-04-20 14:20:18
 * @LastEditTime: 2020-09-02 14:11:57
 * @LastEditors: linqibin
 */
import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import reducer from './reducer'

import createSagaMiddleware from 'redux-saga'
import SAGA_WATCHER from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(SAGA_WATCHER)

console.log(store.getState())

store.subscribe(() => {
    const state = store.getState()
    console.log(state)
})

export default store

