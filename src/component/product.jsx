import React from 'react'
import { connect } from 'react-redux'

import { ADD_TO_CART } from '../store/actions'

const mapStateToProps = state => ({ productList: state.productList })

const mapDispatchToProps = dispatch => ({
    addToCart: item => {
        dispatch(ADD_TO_CART({ ...item }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(
    class extends React.Component {
        render() {
            return (
                <>
                    <h1>ProductList</h1>
                    <ul className={this.props.className}>
                        { this.props.productList.map((item, index) => (
                            <li key={index} className="product_item">
                                <span>{ item.name }</span>
                                <span>----------单价：</span>
                                <i>{ item.price }</i>
                                <span>----------库存：</span>
                                <i>{ item.total }</i>
                                <button disabled={!item.total} className="add" onClick={() => this.props.addToCart(item)}>添加</button>
                            </li>
                        )) }
                    </ul>
                </>
            )
        }
    }
)