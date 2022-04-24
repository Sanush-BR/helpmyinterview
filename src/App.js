import React, { Component } from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Logout from "./components/logout";
import Navbar from "./components/navbar";
import Cards from "./components/Main";
import About from "./components/about";
import Login from "./components/login";
import Register from "./components/register";
import Notfound from "./components/notfound";
import UpdateForm from "./components/update";
import Carddata from "./components/innercomponents/tabledata";
import auth from "./components/services/authService";
import 'react-toastify/dist/ReactToastify.css';




export default class App extends Component {
  state={};

  componentDidMount() 
  { 
       const user = auth.getCurrentUser();
       this.setState({user});
  }

  render() {
    return (
      <div>
        <ToastContainer/>
        <Navbar user={this.state.user}/>
        <div >
          <Switch>
                <Route path="/" component={Cards} exact={true}/>
                <Route path="/:productName/:id" component={UpdateForm} exact={true}/>
                <Route path="/about" component={About} exact ={true} />
                <Route path="/login" component={Login} exact ={true}/>
                <Route path="/logout" component={Logout} exact={true}/>
                <Route path="/register" component={Register} exact ={true}/>
                <Route path="/notfound" component={ Notfound } exact ={true}/>
                <Route path="/:productName/update" component={UpdateForm} exact ={true}/>
                <Route path="/:id" component={Carddata}/>
                
                <Redirect to="/notfound"/>
          </Switch>
        </div>
      </div>
    );
  }
}
