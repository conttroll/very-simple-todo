import ToDoContainer from "./components/ToDo/ToDoContainer";
import AllContainer from "./components/All/AllContainer";
import ActiveContainer from "./components/Active/ActiveContainer";
import CompletedContainer from "./components/Completed/CompletedContainer";
import {Route} from 'react-router-dom';

function App() {
  return (
    <div>
        <ToDoContainer />
        <Route path="/:status?" render={ () =>
            <AllContainer /> }
        />
        {/*<Route path="/active" render={ () =>*/}
        {/*    <ActiveContainer /> }*/}
        {/*/>*/}
        {/*<Route path="/completed" render={ () =>*/}
        {/*    <CompletedContainer /> }*/}
        {/*/>*/}
    </div>
  );
}

export default App;
