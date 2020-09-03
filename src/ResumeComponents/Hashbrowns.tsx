import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Tooltip, IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Hashbrowns = () => (
  <div className="container">
    <Tooltip title="Back to virtual resume">
      <NavLink to="/resume" className="link">
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
      </NavLink>
    </Tooltip>
    <h1>Hashbrowns</h1>
    <p className="italics no-top-margin">Made in 2018</p>
    <p className="description indent margin-top">
      In 2018, I wanted to learn more about user data security. I had already{" "}
      <a
        href="https://www.coursera.org/account/accomplishments/records/JEWD9LW8N9XL"
        className="link"
        target="_blank"
      >
        learned the basics{" "}
      </a>{" "}
      of user authentication with JSON web tokens, but I wanted to do a deeper
      dive into data security. After researching popular hashing algorithms, I wrote a bash script implementation of SHA-1 that was based on Wikipedia's{" "}
      <a
        href="https://en.wikipedia.org/wiki/SHA-1#SHA-1_pseudocode"
        className="link"
        target="_blank"
      >
        pseudocode
      </a>
      . Following each step of a hashing algorithm helped me understand the operations that make hashes work.
    </p>
  </div>
);

export default Hashbrowns;
