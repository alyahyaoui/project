
import { Nav, Navbar,Button, FormControl, Form  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css";
import { logout } from "../../JS/actions/user";
import {useDispatch} from "react-redux"
import {useState} from "react"
import {getpubs} from "../../JS/actions/pub"
// import SearchBox from "../SearchBox"
// import {Route} from "react-router-dom"
const Nave = ({history}) => {
  const [searched, setSearched] = useState("");
const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    if (searched.trim()) {
      history.push(`/titre/${searched}`);
    } else {
      history.push("/");
    }
  };
console.log(searched)
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
        <Form inline onSubmit={submitHandler}>
        <FormControl
          type="text"
          name="q"
          placeholder="Search for a pub.."
          onChange={(e) => setSearched(e.target.value)}
          className=" mr-sm-2 ml-sm-5"
        />
        <Button type="submit" className="button" onClick={() =>
                        dispatch(getpubs({searched},history))} >
          click
        </Button>
      </Form>
       {/* <Route  render={({history})=> <SearchBox history={history}/> }/> */}
      </Navbar>
    </div>
  );
};

export default Nave;
