import { Switch, Route } from "react-router-dom";
import SignUp from "./components/signUp/SignUp";
import dashbord from "./components/dashbord/dashbord";
import SingelPub from "./components/SingelPub";
import PrivateRoute from "./components/routes/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { filterPub, getpubs } from "./JS/actions/pub";
import Nave from "./components/nav/nav";
import AboutUs from "./components/pages/AboutUs";
import Error from "./components/pages/Error";
import AddPub from "./components/AddPub/AddPub";
import Home from "./components/pages/Home";
import Utilisateur from "./components/utilisateur/Utilisateur";
import { getusers } from "./JS/actions/user";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [searched, setSearched] = useState("");
  const users = useSelector((state) => state.userReducer.users);
  const pubs = useSelector((state) => state.pubReducer.pubs);
  const loadpub = useSelector((state) => state.pubReducer.loadpub);
  useEffect(() => {
    dispatch(getpubs());
  }, []);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="nave">
        <Nave />
      </div>

      <div className="home">
        <Switch>
          <Route
            exact
            path={["/Home", "/"]}
            render={() => (
              <Home
                pubs={pubs}
                loadpub={loadpub}
                searched={searched}
                setSearched={setSearched}
              />
            )}
          />
          <Route
            path="/ListeUser"
            render={() =>
              users.map((el) => <Utilisateur key={el._id} user={el} />)
            }
          />
          <Route
            path="/Profile"
            render={(el) => <Utilisateur key={el._id} user={el._id} />}
          />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/AddPub" component={AddPub} />
          <Route
            path="/SingelPub"
            render={(props) => <SingelPub {...props} pubs={pubs} />}
          />
          <PrivateRoute path="/dashbord" component={dashbord} />
          <Route path="/*" component={Error} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
