
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css";
import { logout } from "../../JS/actions/user";
import {useDispatch} from "react-redux"
import SearchBox from "../SearchBox"
import {Route} from "react-router-dom"
const Nave = ({history}) => {
  const dispatch = useDispatch()
  return (
    <div className="all">
      <Navbar className="navbar" bg="light" variant="light">
        <Navbar.Brand href="/">TuniHotes</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/AboutUs">About Us</Nav.Link>
          <Nav.Link href="/SignUp">Sing Up</Nav.Link>
          <Nav.Link
            onClick={() => {
              dispatch(logout);
              history.push("/SignUp");
            }}
          >
            Logout
          </Nav.Link>
        </Nav>
       <Route  render={({history})=> <SearchBox history={history}/> }/>
      </Navbar>
    </div>
  );
};

export default Nave;
