import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Tooltip, IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Intake = () => (
  <div className="container">
    <Tooltip title="Back to virtual resume">
      <NavLink to="/resume" className="link">
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
      </NavLink>
    </Tooltip>
    <h1>Intake</h1>

    <p className="italics no-top-margin">Made in 2020</p>
    <p className="description indent margin-top">
      One of my 2020 new years resolutions was to watch a movie every other day
      for the entire year, and to fulfill that resolution I had to find a way to
      track the movies I watched. I tried logging my progress a few different
      ways, but none of them really worked for me. I needed something that was
      as easy to use as a notepad and more granular than platforms that offer a
      rating system based on only 5 stars. I also wanted to gather statistics on
      the movies I was watching to find out what themes I was drawn to, what
      genres I watched the most, and more.
    </p>
    <p className="description indent">
      I was inspired to design and build my own platform for logging the movies
      I was watching, and I was confident that I had the skills to build the
      site. I prototyped the site in 7 days using Node.js and Express.js for the
      back-end, Passport.js for user authentication, MongoDB and Mongoose for
      the database, and EJS, HTML5, and CSS for the front-end. By the end of the
      week, I had a working demo that allowed users to add movies to their
      accounts, and the site would automatically generate statistics based on
      the inputted movies.
    </p>
    <p className="description indent">
      Over the next few months, I worked daily on building out the platform's
      features. I rebuilt the front end using Typescript and React.js with Redux
      and React-router, I implemented email verification using SendGrid, I
      worked with JSON Web Tokens for the password reset process, I turned the
      back-end into a clean and RESTful API server that is optimized for
      efficient data manipulation, I implemented SEO best practices, and I
      designed a mobile version of the site using CSS media queries. The final
      result is a fully functional online platform that is starting to gain new
      users. Check it out at{" "}
      <a href="https://www.intake.space" className="link" target="_blank">
        intake.space
      </a>
    </p>
  </div>
);

export default Intake;
