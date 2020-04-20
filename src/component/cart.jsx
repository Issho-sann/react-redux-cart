import React from 'react'
import { connect } from 'react-redux'

import { SETTLEMENT } from '../store/actions'

const mapStateToProps = state => {
    return {
        amount: state.amount,
        productListInCart: state.productListInCart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        settlement: () => {
            dispatch(SETTLEMENT())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(
    class extends React.Component {
        static defaultProps = {
            productListInCart: []
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