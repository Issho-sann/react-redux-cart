/*
 * @Description: 
 * @Author: linqibin
 * @Date: 2020-04-20 14:19:48
 * @LastEditTime: 2020-04-20 19:41:35
 * @LastEditors: linqibin
 */
import { combineReducers } from 'redux'

const defaultProductList = [
    {
        id: 1,
        name: 'ipad mini',
        total: 7,
        price: 2000
    }, {
        id: 2,
        name: 'mackbook pro',
        total: 12,
        price: 10000
    }, {
        id: 3,
        name: 'mackbook air',
        total: 6,
        price: 5500
    }
]

const productList = (state = defaultProductList, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return state.map(item => {
                if (item.id === action.id && item.total > 0) {
                    item.total --
                }
                return { ...item }
            })
    
        default:
            return state
    }
}

const productListInCart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (action.total < 1) {
                return state
            }
            const current = state.find(item => item.id === action.id)
            if (current) {
                return state.map(item => {
                    if (item.id === action.id) {
                        item.total ++
                    }
                    return { ...item }
                })
            } else {
                return [
                    ...state,
                    {
                        ...action,
                        total: 1
                    }
                ]
            }
        
        case 'SETTLEMENT':
            return []
            
        default:
            return state
    }
}

const amount = (state = 0, action) => {
    switch (action.type) {
        case 'SETTLEMENT':
            return 0
        
        case 'ADD_TO_CART':
            if (action.total < 1) {
                return state
            }
            return state + action.price
    
        default:
            return state
    }
}

export default combineReducers({
    amount, productList, productListInCart
})