import ToDoContainer from "./components/ToDo/ToDoContainer";
import AllContainer from "./components/All/AllContainer";
import {Route} from 'react-router-dom';
import NavLinks from "./components/NavLinks/NavLinks";

function App() {
  return (
    <div className="app">
        <ToDoContainer />
        <Route path="/:status?" render={ () =>
            <AllContainer /> }
        />
        <NavLinks />
    </div>
  );
}

export default App;
