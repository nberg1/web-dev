import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import whoReducer from "./reducers/who-reducer";
import {createStore} from "redux";
import WhoToFollowList from "./WhoToFollowList";
import {Provider} from "react-redux";

const store = createStore(whoReducer);

const Tuiter = () => {
    return(
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                    <Outlet/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
};

export default Tuiter;