/*
 * @Description: 
 * @Author: linqibin
 * @Date: 2020-04-20 14:20:18
 * @LastEditTime: 2020-04-21 10:40:56
 * @LastEditors: linqibin
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

store.subscribe(() => {
    const state = store.getState()
    console.log(state)
})

export default store

