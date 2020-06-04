import React, { Component } from 'react';

class Item extends Component {
    render() {
        return <p>{this.props.item} - {this.props.price}</p>

    }
}

export default Item