import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Tooltip, IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Barcode = () => (
  <div className="container">
    <Tooltip title="Back to virtual resume">
      <NavLink to="/resume" className="link">
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
      </NavLink>
    </Tooltip>
    <h1>Barcode</h1>

    <p className="italics no-top-margin">Made in 2020</p>
    <p className="description indent margin-top">
      At some point in July, 2020, I saw this photo:
    </p>
    <img
      src="https://www.cartoonbrew.com/wp-content/uploads/2013/06/Bambi-1280x600.jpg"
      className="project-image"
    />
    <p className="description indent margin-top">
      It's an image that consists of every single frame in the movie{" "}
      <em>Bambi</em> compressed into one long line. I was immediately inspired
      by the colors in the image, but I disliked how there was vertical
      gradation within each frame. Instead, I wanted to only see the dominant
      color of each frame, so I got to work building my own color
      barcode generator.
    </p>
    <p className="description indent">
      I built the program using python3, opencv-python, sklearn, and numpy. In
      the process, I learned all about{" "}
      <a
        href="https://en.wikipedia.org/wiki/K-means_clustering"
        className="link"
      >
        k-means clustering
      </a>{" "}
      in order to find dominant colors, and I got to work on my python3 chops.
      You can see my dev log for the project{" "}
      <NavLink to="/journal/devLog/d1" className="link">
        here
      </NavLink>
      . Check out some of my favorite movie barcodes generated with the script:
    </p>
    <img src="/covers/barcode.jpg" className="project-barcode" alt="Fantastic Planet barcode"/>
    <p className="description italics">
      René Laloux's classic animated science fiction film "Fantastic Planet"
    </p>
    <img src="/covers/barcodes/treeOfLife.jpg" className="project-barcode" alt="Tree of Life barcode"/>
    <p className="description italics">
      Terrence Malick's very green epic "Tree of Life"
    </p>
    <img src="/covers/barcodes/starWars.jpg" className="project-barcode" alt="Star Wars: A New Hope barcode"/>
    <img src="/covers/barcodes/starWarsGray.jpg" className="project-barcode" alt="Star Wars: A New Hope barcode in grayscale"/>
    <p className="description italics">
      "Star Wars: A New Hope" in color and in grayscale.
    </p>
    <img src="/covers/barcodes/bladeRunner.jpg" className="project-barcode" alt="Blade Runner: 2049 barcode" />
    <p className="description italics">
      Denis Villeneuve's visually stunning "Blade Runner: 2049"
    </p>
  </div>
);

export default Barcode;
