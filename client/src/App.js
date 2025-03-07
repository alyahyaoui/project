import { Switch, Route, useHistory } from "react-router-dom";
import SignUp from "./components/signUp/SignUp";
import SingelPub from "./components/pages/SingelPub";
import PrivateRoute from "./components/routes/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterPub, getpubs } from "./JS/actions/pub";
import Nave from "./components/nav/nav";
import AboutUs from "./components/pages/AboutUs";
import Error from "./components/pages/Error";
import AddPub from "./components/AddPub/AddPub";
import Home from "./components/pages/Home";
import ListeUser from "./components/ListeUser";
import Utilisateur from "./components/utilisateur/Utilisateur";
import { current } from "./JS/actions/user";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const user = useSelector((state) => state.userReducer.user);
  const users = useSelector((state) => state.userReducer.users);
  const loadUser = useSelector((state) => state.userReducer.loadUser);
  const pubs = useSelector((state) => state.pubReducer.pubs);
  const loadpub = useSelector((state) => state.pubReducer.loadpub);
  const searched = useSelector((state) => state.pubReducer.searched);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(current());
    dispatch(getpubs());
    dispatch(filterPub());
  }, [searched]);
  

  return (
    <div className="App">
      <div className="nave">
        <Nave history={history} />
      </div>

      <div className="home">
        <Switch>
          <Route
            exact
            path={["/Home", "/"]}
            render={() => <Home pubs={pubs} loadpub={loadpub} />}
          />
          <Route
            path="/ListeUser"
            render={() => <ListeUser users={users} loadUser={loadUser} />}
          />
          <Route
            path="/Profile"
            render={() => <Utilisateur user={user} loadUser={loadUser} />}
          />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/AddPub" component={AddPub} />
          <Route path="/SingelPub" component={SingelPub} />
          {/* <PrivateRoute path="/Home" component={Home} /> */}
          <Route path="/search/:searched" component={Home} />
          <PrivateRoute path="/Profile" component={Utilisateur} />
          <Route path="/*" component={Error} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
