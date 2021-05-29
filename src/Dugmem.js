import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from 'react';

export default class Dugmem extends Component{
    render(){
        return <button class="btn btn-success m-2">{this.props.ad}</button>;
    }
}