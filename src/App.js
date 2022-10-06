import React, { useContext} from "react";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import { ThemeContext } from "./components/context/Themes";
import ToggleButton from './components/ToggleButton/ToggleButton'

const App = () => {

  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  const appStyle = isDark
    ? { backgroundColor: "#011f30", color: "white" }
    : { backgroundColor: "white", color: "#011f30" };
  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        height: "100%",
        position: "absolute",
        left: "0px",
        width: "100%",
        overflow: "auto",
      }}
    >
      <ToggleButton onClick={toggleTheme}/>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/" style={appStyle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" style={appStyle}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" style={appStyle}>
                Projects
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
