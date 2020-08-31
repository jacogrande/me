import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Tooltip, IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Encryptor = () => {
  return (
    <div className="container">
      <Tooltip title="Back to virtual resume">
        <NavLink to="/resume" className="link">
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
        </NavLink>
      </Tooltip>
      <h1>Encryptor</h1>

      <p className="italics no-top-margin">Made in 2012</p>
      <p className="description indent margin-top">
        In 2012, I found out about a website called Codecademy. It came out in
        the later months of 2011, and by the time I started using it, it already
        had{" "}
        <a
          href="https://www.forbes.com/sites/jjcolao/2012/03/22/codecademy/#7cea6f743c6d"
          className="link"
        >
          over 400,000 users{" "}
        </a>
        and a large collection of Javascript, HTML, and CSS lessons.
      </p>
      <p className="description indent">
        I was enchanted by the Javascript language and the programming concepts
        that came with it. I had never been exposed to so much problem solving,
        and I fell in love with it instantly. After learning some more, I wanted
        to use what I knew to make something that was my own.
      </p>
      <p className="description indent">
        At the time, I was 11, and being an 11 year old meant that there was an
        obvious project to work on: a tool that could make secret codes for my
        friends and I. I used the few programming skills I had to write up a
        basic substition cipher implementation. The result was a terrifying mess
        of if statements and a few for loops wrapped up in a "cool" black and
        green web page that looked like it was taken straight out of{" "}
        <a
          href="https://assets.newatlas.com/dims4/default/f50e92b/2147483647/strip/true/crop/1182x788+98+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fhollywood-hacking-2000s-4.png"
          className="link"
        >
          Swordfish.
        </a>{" "}
        Check it out:
      </p>
      <div className="iframe-container">
        <iframe src="https://jacogrande.github.io/encryptor/index.html"></iframe>
      </div>
    </div>
  );
};

export default Encryptor;
