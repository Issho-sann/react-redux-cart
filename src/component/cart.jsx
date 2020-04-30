import React from 'react'
import { connect } from 'react-redux'

import { SETTLEMENT, QUERY_PRODUCT_IN_CART } from '../store/carts/actions'

const mapStateToProps = state => {
    const { amount, productListInCart } = state.Carts
    return {
        amount,
        productListInCart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        settlement: () => {
            dispatch(SETTLEMENT())
        },
        queryProductInCart: () => {
            dispatch(QUERY_PRODUCT_IN_CART())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(
    class extends React.Component {
        static defaultProps = {
            productListInCart: []
        }
        componentDidMount() {
            this.props.queryProductInCart()
        }
        render() {
            return (
                <>
                    <h1>Cart</h1>
                    <ul>
                        { this.props.productListInCart.map(item => (
                            <li key={item.id} className="product_item">
                                <span>{ item.name } * { item.total }</span>
                                <span>---------------{ item.total * item.price }</span>
                            </li>
                        )) }
                    </ul>
                    <button onClick={this.props.settlement} disabled={!this.props.amount}>结算</button>
                    <div className="amount">总价：{ this.props.amount }</div>
                </>
            )
        }
    }
)