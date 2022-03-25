import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/Tuiter/HomeScreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/">
                      <Route path="labs"
                         element={<Labs/>}/>
                      <Route path="hello"
                             element={<HelloWorld/>}/>
                      <Route path="Tuiter"
                             element={<Tuiter/>}>
                          <Route index path="home"
                                 element={<HomeScreen/>}/>
                          <Route path="explore"
                                 element={<ExploreScreen/>}/>
                          {/*<Route path="notifications"*/}
                          {/*       element={<NotificationScreen/>}/>*/}
                      </Route>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
