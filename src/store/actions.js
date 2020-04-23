/*
 * @Description: 
 * @Author: linqibin
 * @Date: 2020-04-20 14:20:27
 * @LastEditTime: 2020-04-21 11:13:32
 * @LastEditors: linqibin
 */

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

const productInCart = [
    {
        id: 1,
        name: 'ipad mini',
        total: 2,
        price: 2000
    }, {
        id: 2,
        name: 'mackbook pro',
        total: 1,
        price: 10000
    }
]

const queryProductList = async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve(defaultProductList)
        }, 1000)
    })
}

const queryProductInCart = async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve(productInCart)
        }, 1500)
    })
}

export const ADD_TO_CART = action => ({ type: 'ADD_TO_CART', ...action })

export const SETTLEMENT = action => ({ type: 'SETTLEMENT', ...action })

const DEFAULT_PRODUCT_LIST = data => ({ type: 'DEFAULT_PRODUCT_LIST', data })

const DEFAULT_PRODUCT_IN_CART = data => ({ type: 'DEFAULT_PRODUCT_IN_CART', data })

export const QUERY_PRODUCT_LIST = () => (async dispatch => {
    console.log('loading...')
    const res = await queryProductList()
    return dispatch(DEFAULT_PRODUCT_LIST(res))
})

export const QUERY_PRODUCT_IN_CART = () => (async dispatch => {
    console.log('loading...')
    const res = await queryProductInCart()
    return dispatch(DEFAULT_PRODUCT_IN_CART(res))
})