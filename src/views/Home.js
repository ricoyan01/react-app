import React from 'react';

export default class Home extends React.Component{
    constructor(){
        super()
    this.state = {
        variable:''
    }
    
    }
    componentDidMount(){
        this.setState({variable: 'Website Penjualan Rumah Terbaik'})
    }
    
    componentDidUpdate(){
        //....
    }

    render() {
    return (
        
        <div className="App">
        <body id="home"/>
        
        <header id="showcase">
            <div class="showcase-content">
                <h1 class="heading"> {this.state.variable} </h1>
                <p class="lead">
                </p>
            </div>
    
        </header>
        </div>
      );
    }
}
