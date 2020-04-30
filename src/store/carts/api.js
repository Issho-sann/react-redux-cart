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

const queryProductInCart = async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve(productInCart)
        }, 1500)
    })
}

export default {
    queryProductInCart
}