import React,{Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Pages/AboutPage"
import Contact from "./Pages/contactPage"
import Achieved from "./Pages/Achieved"
import Default from "./Pages/defaultPage"
import drinkWater from "./Pages/drinkWaterPage"
import Mindfulness from "./Pages/mindfulnessPage"
import todo from "./Pages/todoPage"
import singletodo from "./Pages/singleTODOPage"
import Home from "./Pages/homePage"

import{Route,Switch} from 'react-router-dom'

class App extends Component{
  render(){
    return (
      <>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/achieved" exact component={Achieved}/>
        <Route path="/drinkWater" exact component={drinkWater}/>
        <Route path="/mindfulness" exact component={Mindfulness}/>
        <Route path="/todo" exact component={todo}/>
        <Route path="/todo/:id" exact component={singletodo}/>
        <Route component={Default}/>
      </Switch>

      </>
  );
  }
}

export default App;
