import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Tooltip } from "@material-ui/core";
import MetaTags from "react-meta-tags";

import Nav from "./Nav";
import Music from "./Music";
import Header from "./Header";
import Journal from "./Journal";
import Resume from "./Resume";
import Connect from "./Connect";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/journal/:category/:id">
            <Journal />
          </Route>
          <Route path="/journal">
            <Journal />
          </Route>
          <Route path="/resume/:project">
            <Resume />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/connect">
            <Connect />
          </Route>
          <Route path="/">
            <div className="home-container">
              <MetaTags>
                <title>jackson prowell</title>
                <meta
                  name="description"
                  content="My personal site. Check out my virtual resume, listen to some of my music, or connect with me."
                ></meta>
              </MetaTags>
              <img id="logo" src={process.env.PUBLIC_URL + "/boat.jpg"} />
              <h1 className="no-bottom-margin">jackson prowell</h1>
              <p className="italics small">web developer / general tinkerer</p>
              <Nav />
              <div className="inline-flex margin-top">
                <Tooltip title="my github">
                  <a
                    href="https://github.com/jacogrande"
                    aria-label="link to my github"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/github.png"}
                      className="social-icon cursor-pointer"
                      width={20}
                      height={20}
                    />
                  </a>
                </Tooltip>
                <Tooltip title="my linkedin">
                  <a
                    href="https://www.linkedin.com/in/jackson-prowell"
                    aria-label="link to my linkedin"
                  >
                    <LinkedInIcon
                      style={{ color: "#0077b5" }}
                      className="social-icon icon-bump-down"
                    />
                  </a>
                </Tooltip>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
