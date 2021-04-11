import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={["/", "/about", "/projects"]}>
          <Navbar bg="light" expand="lg">
            <Link to="/" className="navbar-brand">Home</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route exact path="/">
            <h1>home</h1>
          </Route>
          <Route exact path="/about">
            <h1>about</h1>
          </Route>
          <Route exact path="/projects">
            <h1>projects</h1>
          </Route>
        </Route>
        <Route exact path="/404">
          <h1>404</h1>
        </Route>
        <Route>
          <Redirect to="/404"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
