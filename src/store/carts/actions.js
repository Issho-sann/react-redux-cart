import Carts from './api'

export const SETTLEMENT = action => ({ type: 'SETTLEMENT', ...action })

export const DEFAULT_PRODUCT_IN_CART = data => ({ type: 'DEFAULT_PRODUCT_IN_CART', data })

export const QUERY_PRODUCT_IN_CART = () => (async dispatch => {
    console.log('QUERY_PRODUCT_IN_CART：loading...')
    const res = await Carts.queryProductInCart()
    return dispatch(DEFAULT_PRODUCT_IN_CART(res))
})