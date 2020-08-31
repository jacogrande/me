import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Tooltip, IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const KTM = () => (
  <div className="container">
    <Tooltip title="Back to virtual resume">
      <NavLink to="/resume" className="link">
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
      </NavLink>
    </Tooltip>
    <h1>Kitchen Table Magic</h1>
    <p className="italics no-top-margin">Made in 2020</p>
    <p className="description indent margin-top">
      When San Francisco was told to shelter in place, my brothers and I wanted
      to find a way to keep playing Magic: The Gathering, our favorite trading
      card game. There were some online versions of the game, but none of them
      had the simplicity and control that we wanted, so we decided to make our
      own. We got to work building a site with a Typescript / React front-end
      and a Node.js / Express back-end.
    </p>
    <p className="description indent">
      I was in charge of building and configuring the backend API and MongoDB
      database to support user authentication and deck building. I set up API
      endpoints to authenticate users using Passport.js, and I built custom
      deckbuilding functionality with the Scryfall API to fetch card data that
      wasn't on the local database. This is what the deck building process
      looked like:
    </p>
    <img
      src={process.env.PUBLIC_URL + "/covers/deck-builder.png"}
      className="project-image"
      alt="Kitchen Table Magic's deck builder interface"
    />
    <img
      src={process.env.PUBLIC_URL + "/covers/deck.png"}
      className="project-image"
      alt="Kitchen Table Magic's deck viewer interface"
    />
    <p className="description indent margin-top">
      It was also my responsibility to design a socket system with Socket.io to
      manage game lobbies and user communication. This was my first time working
      with sockets, and I learned a lot about real time communication between
      multiple seperate clients while working on this project. Here's what game
      lobbies looked like:
    </p>
    <img
      src={process.env.PUBLIC_URL + "/covers/game-lobby.png"}
      className="project-image"
      alt="Kitchen Table Magic's game lobby interface"
    />
  </div>
);

export default KTM;
