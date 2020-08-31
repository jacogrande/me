import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import "./Connect.css";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Tooltip } from "@material-ui/core";
import MetaTags from "react-meta-tags";

const Connect = () => {
  return (
    <div className="container">
      <MetaTags>
        <title>connect : jackson prowell</title>
        <meta name="description" content="Connect with me for professional services in web development and music."></meta>
      </MetaTags>
      <h1>connect</h1>
      <p className="indent description">
        Hi! I'm <b>Jackson Prowell</b> - UCLA student, web developer, software
        tinkerer, musician, and all around curious person. I've been learning
        web development through building projects for 7+ years, and I'm looking
        to finally translate my skills to a professional environment.
      </p>
      <p className="indent description">
        <b>Web Development:</b> I'm skilled in Javascript/Typescript
        technologies, specifically the MERN (MongoDB, Express, React, Node.js)
        stack. Over my years programming, I've picked up on some other languages
        and technologies, including python, bootstrap, and java. (Check out some
        of my work{" "}
        <NavLink className="link" to="/resume">
          here
        </NavLink>
        .) If you need some web development work done, send me an email and
        we'll talk.
      </p>
      <p className="indent description">
        <b>Music:</b> I grew up playing the drums, eventually picking up guitar
        along the way. Now, I'll play any instrument I can get my hands on, and
        I can proficiently mix them all together in Logic Pro. Feel free to
        shoot me an email if you want to collaborate or need some
        soundtrack work done.
      </p>
      <div className="connect-footer">
        <p className="inline-flex">
          <MailIcon className="icon" />
          prowelljackson@gmail.com
        </p>
        <div>
          <Tooltip title="my github">
            <a
              href="https://github.com/jacogrande"
              aria-label="link to my github"
            >
              <img
                src="/github.png"
                className="social-icon cursor-pointer"
                width={20}
                height={20}
                alt="github logo"
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
    </div>
  );
};

export default Connect;
