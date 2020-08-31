import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Tooltip, IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Aesap = () => (
  <div className="container">
    <Tooltip title="Back to virtual resume">
      <NavLink to="/resume" className="link">
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
      </NavLink>
    </Tooltip>
    <h1>Aesap</h1>
    <p className="italics no-top-margin">Made in 2017</p>
    <p className="description indent margin-top">
      In 2017, I got some work developing a chatbot for slack. The purpose of
      the bot was to provide more visibility to blocker bug tickets submitted to
      JIRA. I partnered up with my brother Phaedrus to get some help integrating
      the different APIs involved.
    </p>
    <p className="description indent">
      Building the chatbot exposed me to the world of APIs. We integrated API.AI
      (now Dialog Flow) in order to match user input to intents, JIRA REST API
      to listen for blocker bug tickets, and Twilio to notify developers when
      blocker bugs were found. This was also one of my first times collaborating
      on a serious project, and I felt that it was my responsibility to start learning
      how to write clean, legible, and efficient code.
    </p>
  </div>
);

export default Aesap;
