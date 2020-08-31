import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Tooltip, IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const FB = () => (
  <div className="container">
    <Tooltip title="Back to virtual resume">
      <NavLink to="/resume" className="link">
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
      </NavLink>
    </Tooltip>
    <h1>FB Cleaner</h1>
    <p className="italics no-top-margin">Made in 2017</p>
    <p className="description indent margin-top">
      In 2017, Facebook was starting to earn its reputation as a platform that
      mishandled user data. Prior to the Cambridge Analytica scandal, the
      pressing issue was that Facebook would save user data even after users
      delete their accounts, and the only way to stop them from doing so was to
      manually delete all of your account's post, comment, and like history.
    </p>
    <p className="description indent">
      The fix was simple: automate the process. I thought, "Hey, why would I
      spend 10 minutes doing something boring when I could spend 10 hours making
      something that does it for me?". I got to work building a web scraping
      chrome extension that would click the appropriate buttons on a user's
      activity page to delete all of their Facebook activiy. The program itself
      wasn't anything too fancy. I didn't touch any computer vision models or
      anything, instead, I just had the extension's content script find the
      appropriate buttons by their class names and ids. This made the project
      easy to make, but it lead to its deprecation as soon as Facebook updated
      its front end.
    </p>
  </div>
);

export default FB;
