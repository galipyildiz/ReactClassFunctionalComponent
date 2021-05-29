import React, { Component } from 'react'

export default class Sayac extends Component{
    
    constructor(props){
        super(props);//base classa gönderdik
        this.state = {sayi:1};//ilk değer
    }

    render(){
        return <button onClick={()=> this.arttir()}>{this.state.sayi}</button>;
    }

    arttir(){
        this.setState({sayi: this.state.sayi + 1});
    }

}