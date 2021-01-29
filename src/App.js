import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Category from "./Component/InputForm/Category";
import Header from "./Component/Menu/Header";
import React, { Component } from "react";
import CategoryQuiz from "./Component/Menu/CategoryQuiz";
import FormPertanyaan from "./Component/TipeSoal/FormPertanyaan";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       linkStatus:[]
    }
  }
  updateLinkStatus=(status)=>{
    this.setState({linkStatus:status})
  }
  
  render() {
    return (
      
      <div className="App">
      
      <Router>
          <Header linkStatus={this.state.linkStatus} />
          <Switch>
            <Route path="/question">
              <CategoryQuiz updateLinkStatus={this.updateLinkStatus}/>
            </Route>
            <Route path="/attemptquiz/:type">
              <FormPertanyaan updateLinkStatus={this.updateLinkStatus}/>
            </Route>
            <Route path="/createquiz">
          <Category updateLinkStatus={this.updateLinkStatus}/>
            </Route>
          </Switch>
        

      </Router>
      </div>
    );
  }
}

export default App;
