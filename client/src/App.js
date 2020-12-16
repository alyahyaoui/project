import { Switch, Route } from "react-router-dom";
import SignUp from "./components/signUp/SignUp";
import dashbord from "./components/dashbord/dashbord";
import PrivateRoute from "./components/routes/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { current } from "././JS/actions/user";
//import Home from "./components/pages/Home";
import Nave from "./components/nav/nav";
import AboutUs from "./components/pages/AboutUs";
import Error from "./components/pages/Error";
import AddPub from "./components/AddPub/AddPub"
import Pub from "./components/Pub/Pub"
import "./App.css";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []);
  return (
    <div className="App">
      <Nave />
      
      <Switch>
        <Route exact path={["/Home", "/"]} component={Pub} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/AddPub" component={AddPub} />
        <PrivateRoute path="/dashbord" component={dashbord} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
