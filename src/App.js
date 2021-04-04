import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import AllTodo from "./components/pages/All";
import Active from "./components/pages/Active";
import Completed from "./components/pages/Completed";
import Nav from "./components/layout/Nav";
import {Route, Switch} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddTodo from "./components/pages/Add";

function App() {
    return (
        <div className="container">
            <Nav/>
            <AddTodo/>

            <Switch>
                <Route path="/" exact component={AllTodo}/>
                <Route path="/active" exact component={Active}/>
                <Route path="/completed" exact component={Completed}/>
                <Route render={NotFound}/>
            </Switch>
        </div>
    );
}

export default App;
