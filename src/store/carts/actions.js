// import Carts from './api'

export const SETTLEMENT = { type: 'SETTLEMENT' }

export const DEFAULT_PRODUCT_IN_CART = { type: 'DEFAULT_PRODUCT_IN_CART' }

export const QUERY_PRODUCT_IN_CART = { type: 'QUERY_PRODUCT_IN_CART' }

// export const QUERY_PRODUCT_IN_CART = async dispatch => {
//     console.log('QUERY_PRODUCT_IN_CART：loading...')
//     const data = await Carts.queryProductInCart()
//     return dispatch({ ...DEFAULT_PRODUCT_IN_CART, data })
// }