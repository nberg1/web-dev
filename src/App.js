import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/Tuiter/HomeScreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen";

function App() {                      // can also use const App = () => {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello"
                         exact={true}
                         element={<HelloWorld/>}/>
                  <Route path="/"
                         exact={true}
                         element={<Labs/>}/>
                  <Route path="/Tuiter"
                         exact={true}
                         element={<Tuiter/>}/>
                  <Route path="/Tuiter/home"
                         exact={true}
                         element={<HomeScreen/>}/>
                  <Route path="/Tuiter/explore"
                         exact={true}
                         element={<ExploreScreen/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
