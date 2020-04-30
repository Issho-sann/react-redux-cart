import Product from './api'

export const ADD_TO_CART = action => ({ type: 'ADD_TO_CART', ...action })

export const DEFAULT_PRODUCT_LIST = data => ({ type: 'DEFAULT_PRODUCT_LIST', data })

export const QUERY_PRODUCT_LIST = () => (async dispatch => {
    console.log('loading...')
    const res = await Product.queryProductList()
    return dispatch(DEFAULT_PRODUCT_LIST(res))
})