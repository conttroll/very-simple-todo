import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Nav from "./components/layout/Nav";
import {Route, Switch} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import TodosContainer from "./components/pages/TodosContainer";

function App() {
    return (
        <div className="container">
            <Nav/>
            <Switch>
                <Route path="/:param?" exact component={TodosContainer}/>
                <Route render={NotFound}/>
            </Switch>
        </div>
    );
}

export default App;
