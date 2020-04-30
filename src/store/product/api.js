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

const queryProductList = async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve(defaultProductList)
        }, 1000)
    })
}

export default {
    queryProductList
}