import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        return this.props.store.map(i => <Item key={i.item} item={i.item} price={this.props.shouldDiscount ? 1 - i.price * i.discount : i.price} />)
    }
}

export default Home