const productList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return state.map(item => {
                if (item.id === action.id && item.total > 0) {
                    item.total --
                }
                return { ...item }
            })
        case 'DEFAULT_PRODUCT_LIST':
            return action.data
    
        default:
            return state
    }
}

export default (state = {}, action) => ({
    productList: productList(state.productList, action)
})