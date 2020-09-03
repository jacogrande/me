import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Tooltip, IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Pie = () => (
  <div className="container">
    <Tooltip title="Back to virtual resume">
      <NavLink to="/resume" className="link">
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
      </NavLink>
    </Tooltip>
    <h1>PiE Robotics</h1>
    <p className="italics no-top-margin">2016</p>
    <p className="description indent margin-top">
      In my freshman year of highschool, I was invited to be part of the
      school's robotics team that competed in the{" "}
      <a href="https://pioneers.berkeley.edu/" className="link" target="_blank">
        PiE robotics{" "}
      </a>{" "}
      league: a competition held by a group of UC Berkeley engineering students.{" "}
      The robots had to navigate an arena with a 4'x4' ball pit at its center,
      picking up and sorting all sorts of balls along the way. The goal was to
      have the robot sort tennis balls from plastic balls and then sort tennis
      balls with pieces of metal in them from normal tennis balls.
    </p>
    <p className="description indent">
      I was one of two programmers on the team, and it was my responsibility to
      program functionality for the ideas that the team came up with. The robot
      was controlled by an Arduino that we could ssh into and load our updated
      code onto. My first task as one of the team's programmers was to write a
      script that took XBox controller input and mapped it to control the two
      motors that were geared to the robot's treads. I used a python3 library
      called xbox360controller for receiving controller inputs.
    </p>
    <p className="description indent">
      The competition was split up into two sections: The driver section where a
      team member had to control the robot and race other teams to pick up the
      most tennis balls and an autonomous section where robots would have t to
      autonomously pick up as many balls as possible. I was in charge of
      programming the robot's autonomous capabilities. The challenge was that
      all of the tennis balls were placed on a long line of white tape, so our
      robot needed to be capable of autonomously following a line of tape on the
      ground. Our solution was to put three light sensors on the bottom of the
      robot chassis so that it could tell where the line of tape was. I
      programmed a conditional into the robot's game loop that would turn the
      chassis if the line of tape (or the higher light value) touched one of the
      sensors beside the middle sensor.
    </p>
    <p className="description indent">
      The team worked tirelessly, sometimes staying at school until midnight, to
      finish our robot in the three months that we had. All of that effort paid
      off, however, on the day of the competition. We got off to a rocky start
      when the servo motor that released our stored tennis balls broke
      mid-match, but after some quick fixes, we got the robot back up and
      running, eventually making it to the finals and taking home the
      championship trophy.
    </p>
  </div>
);

export default Pie;
