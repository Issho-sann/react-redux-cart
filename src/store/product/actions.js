// import Product from './api'

export const ADD_TO_CART = { type: 'ADD_TO_CART' }

export const DEFAULT_PRODUCT_LIST = { type: 'DEFAULT_PRODUCT_LIST' }

export const QUERY_PRODUCT_LIST = { type: 'QUERY_PRODUCT_LIST' }

// export const QUERY_PRODUCT_LIST = async dispatch => {
//     console.log('loading...')
//     const data = await Product.queryProductList()
//     return dispatch({ ...DEFAULT_PRODUCT_LIST, data })
// }