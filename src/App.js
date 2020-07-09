import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {ThemeContext} from './themeContext';
import { Home, Layanan, Alamat, Kontak, MyComponent } from './views';
import './App.css';


class App extends React.Component {
  constructor(){
    super()
this.state = {
    variable:''
}


}
componentDidMount(){
    this.setState({variable: 'Home'})
}

componentDidUpdate(){
    //....
}
 render(){
  
  return (
    <Router>
    <div className="App">
    <body id="home"/>
    <nav className="menubar">
    <h1>
     My<span class="text-primary">Sweet</span>Home.com         
    </h1>
    <ul>
            <li><Link to="/">{this.state.variable}</Link> </li>
            <li><Link to="/layanan">Layanan</Link> </li>
            <li><Link to="/alamat"> Alamat </Link></li>
            <li><Link to="/kontak"> Kontak </Link></li>   
    </ul>
    <ThemeContext.Provider value={this.state}>
         <MyComponent />
         </ThemeContext.Provider>
    
    </nav>

    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/layanan">
        <Layanan/>
      </Route>
      <Route path="/alamat">
        <Alamat/>
      </Route>
      <Route path="/kontak">
        <Kontak/>
      </Route>    
    </Switch>

    </div>
    </Router>
  );
}
}

export default App;
