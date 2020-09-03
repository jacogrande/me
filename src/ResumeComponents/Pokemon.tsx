import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Tooltip, IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Pokemon = () => (
  <div className="container">
    <Tooltip title="Back to virtual resume">
      <NavLink to="/resume" className="link">
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
      </NavLink>
    </Tooltip>
    <h1>Pokemon Rocket</h1>
    <p className="italics no-top-margin">Made in 2018</p>
    <p className="description indent margin-top">
      I had always wanted to play a pokemon game where your character starts off
      as a member of Team Rocket. I think having the main character start off in
      a typical antagonist role lends itself to better{" "}
      <a
        href="https://www.britannica.com/art/tragedy-literature/Theory-of-tragedy"
        className="link"
        target="_blank"
      >
        story.
      </a>
      I figured that it would be a fun project to try and make an original
      Pokemon replica in order to develop this game, so I got to work.
    </p>
    <p className="description indent">
      My first step was picking the technologies I was going to use. At this
      point in time, I was proficient in Javascript, and I had dabbled in HTML5
      Canvas, so I decided to go with those. I started by writing a script that
      generated a traversable map of randomly colored tiles, and then I built on
      that script, adding support for reading and displaying sprites from an
      image file and reading a custom drawn game map file that consisted of
      tiles representing which sprites to display. The result looked like this:
    </p>
    <img
      src={process.env.PUBLIC_URL + "/covers/pokemon-map.png"}
      className="project-image"
      alt="Pokemon Rocket rendered game map"
    />
    <p className="description indent margin-top">
      To improve the look of the game engine's map system, I had to add animated
      tiles. These map tiles iterate through an array of sprites after every few{" "}
      <a href="https://en.wikipedia.org/wiki/Delta_timing" className="link" target="_blank">
        ticks
      </a>
      , creating a consistently timed animation. Check it out:
    </p>
    <img
      src={process.env.PUBLIC_URL + "/covers/pokemon-animated.gif"}
      className="project-image"
      alt="Animations in Pokemon Rocket"
    />
    <p className="description indent margin-top">
      The game map, or tilemap, was stored as a two dimensional array of sprite
      and animated sprite objects, but the tilemap was also mapped to a
      permission map, a two dimensional array that would track the player's
      position and check for movement boundaries. Working on this project made
      me spend a lot of time getting comfortable with more complicated data
      types.
    </p>
    <img
      src={process.env.PUBLIC_URL + "/covers/pokemon-movement.gif"}
      className="project-image"
      alt="Trying to move into bondaries in Pokemon Rocket"
    />
    <p className="description indent margin-top">
      The last feature I implemented was a settings menu. The player could pause
      the game and look at their inventory, pokemon, and more.
    </p>
    <img
      src={process.env.PUBLIC_URL + "/covers/pokemon-menu.gif"}
      className="project-image"
      alt="Pokemon Rocket game menu"
    />
    <p className="description indent margin-top">
      After 4 months of work and a codebase that was growing larger and more
      cluttered, finishing the game by myself proved too daunting of a task, but
      I had taken so much away from working on the game engine. Pokemon Rocket
      was the first project that I worked on consistently for a few hours a day,
      and that constant practice led those 4 months to be one of the most
      educational time periods in my experience programming. I learned how and
      when to implement efficient object oriented techniques in Javascript, I
      designed modular code for a clean and organized codebase, and I refined my
      knowledge of programming fundamentals.
    </p>
  </div>
);

export default Pokemon;
