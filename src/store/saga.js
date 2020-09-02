import Carts from './carts/api'
import Product from './product/api'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { DEFAULT_PRODUCT_IN_CART, QUERY_PRODUCT_IN_CART } from './carts/actions'
import { DEFAULT_PRODUCT_LIST, QUERY_PRODUCT_LIST } from './product/actions'

function* FETCH_PRODUCT_IN_CART () {
    const data = yield call(Carts.queryProductInCart)
    yield put({ ...DEFAULT_PRODUCT_IN_CART, data })
}

function* FETCH_PRODUCT_LIST () {
    const data = yield call(Product.queryProductList, {id: 1})
    yield put({ ...DEFAULT_PRODUCT_LIST, data })
}

function* SAGA_WATCHER () {
    // const action = yield take(QUERY_PRODUCT_IN_CART.type)
    // yield fork(FETCH_PRODUCT_IN_CART, action)
    yield takeLatest(QUERY_PRODUCT_IN_CART.type, FETCH_PRODUCT_IN_CART)
    yield takeEvery(QUERY_PRODUCT_LIST.type, FETCH_PRODUCT_LIST)
}

export default SAGA_WATCHER