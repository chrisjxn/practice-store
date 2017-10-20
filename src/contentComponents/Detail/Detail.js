import React, { Component } from 'react';
import axios from 'axios';

export default class Detail extends Component {
    constructor() {
        super()

        this.state = {
            brandDetail: {}
        }
    }

    componentDidMount() {
        return axios.get(`http://localhost:3000/brand/${this.props.match.params.brand}`)
        .then(res => {
            this.setState({
                brandDetail: res.data
            })
        })
    }
    
    render() {
        return (
            <div>
                <div>This is the brand detail page</div>
                <div>{this.state.brandDetail.brand}</div>
                <div>{this.state.brandDetail.region}</div>
                <div>{this.state.brandDetail.country}</div>
                <div>{this.state.brandDetail.price}</div>
            </div>
        )
    }
}