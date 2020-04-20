/*
 * @Description: 
 * @Author: linqibin
 * @Date: 2020-04-20 14:20:18
 * @LastEditTime: 2020-04-20 15:08:59
 * @LastEditors: linqibin
 */
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

store.subscribe(() => {
    const state = store.getState()
    console.log(state)
})

export default store

