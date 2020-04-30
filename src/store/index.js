/*
 * @Description: 
 * @Author: linqibin
 * @Date: 2020-04-20 14:20:18
 * @LastEditTime: 2020-04-26 10:38:18
 * @LastEditors: linqibin
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

console.log(store.getState())

store.subscribe(() => {
    const state = store.getState()
    console.log(state)
})

export default store

