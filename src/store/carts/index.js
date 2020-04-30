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

        case 'DEFAULT_PRODUCT_IN_CART':
            return action.data
            
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

        case 'DEFAULT_PRODUCT_IN_CART':
            let amount = 0
            action.data.forEach(item => {
                amount += item.price * item.total
            })
            return amount
    
        default:
            return state
    }
}

export default (state = {}, action) => ({
    productListInCart: productListInCart(state.productListInCart, action),
    amount: amount(state.amount, action)
})