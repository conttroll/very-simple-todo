import ToDoContainer from "./components/ToDo/ToDoContainer";
import AllContainer from "./components/All/AllContainer";
import {Route} from 'react-router-dom';
import NavLinks from "./components/NavLinks/NavLinks";
import './App.css';

function App() {
  return (
    <div className="app">
        <h1>ToDoShechka</h1>
        <ToDoContainer />
        <Route path="/:status?" render={ () =>
            <AllContainer /> }
        />
        <NavLinks />
    </div>
  );
}

export default App;
