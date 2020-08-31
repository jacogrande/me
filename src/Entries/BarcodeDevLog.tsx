import React from "react";
import { NavLink } from "react-router-dom";

const BarcodeDevLog = () => {
  return (
    <div className="container">
      <p className="entry-content indent">
        After seeing an{" "}
        <a
          href="https://www.cartoonbrew.com/wp-content/uploads/2013/06/Bambi-1280x600.jpg"
          className="link"
        >
          image of every frame of the movie <em>Bambi</em> compressed into one
          long movie "barcode"
        </a>
        , I was inspired to make my own python script that, instead of
        compressing each frame, finds the dominant color of each frame and
        ouputs a dominant color timeline of an inputted movie.
      </p>
      <p className="entry-content indent">
        The first thing I had to figure out was how to read each frame of a
        video file. After a few Google searches, I came across opencv-python,
        the premier open-source computer vision library for python, and some{" "}
        <a
          href="https://stackoverflow.com/questions/51474421/extracting-frames-every-second-of-all-videos-in-folder"
          className="link"
        >
          example code
        </a>{" "}
        that made use of opencv-python written by Stack Overflow user
        Sparkiepandas. The example code demonstrated how to read 1 frame per
        second of each frame in every video in a given directory, but I only
        wanted to read frames from a single video file, so I made some quick
        adjustments to the code, and started working on a test. I threw together
        a python controller file that took a video file as an argument, and I
        had the program save a copy of one frame per second of the inputted
        video file.
      </p>
      <p className="entry-content indent">
        Now that I could read frames of video files, I had to find out how to
        find the dominant color of an image in python. At first, I thought of
        getting the average color of each pixel in the image, but I quickly
        realized the average color wasn't really what I was looking for (let's
        say that an image is three quarters red, and one quarter blue, the
        average color would be a purplish red, but the most common color of the
        image is red). Instead, I had to find out how to find the dominant color
        (the most common color) in an image, so I got to researching finding
        dominant colors of images in python and opencv, and I came across an{" "}
        <a
          href="https://adamspannbauer.github.io/2018/03/02/app-icon-dominant-colors/"
          className="link"
        >
          article by Adam Spannbauer
        </a>
        about how to find the dominant color of an image with opencv-python. In
        the article, Adam explains how{" "}
        <a
          href="https://en.wikipedia.org/wiki/K-means_clustering"
          className="link"
        >
          k-means clustering
        </a>{" "}
        can be used to find the dominant color of a list of pixels. Essentially,
        the program finds <em>k</em> mean colors, and then maps each pixel to
        the closest mean, respresenting a{" "}
        <a
          href="https://en.wikipedia.org/wiki/Voronoi_diagram"
          className="link"
        >
          voronoi diagram
        </a> {' '}
        of the <em>k</em> possible dominant colors. It then returns the most
        popular mean as the dominant color.
      </p>
      <p className="entry-content indent">
        Finally, I had to put all of my research together. I updated the
        controller file to include an argument for setting <em>k</em>, for
        setting the interval that frames are read, for the width of the image to
        be outputted, and for the height of the image to be outputted. Then, I
        had to integrate the dominant color finding function into the main loop
        so that the dominant color of the frame at the given frame interval
        could be found, and I added a function for generating a new image of all
        of the dominant colors with numpy at the end of the script. The last
        polish I made was to add an option to also generate a
        grayscale barcode. The dominant color function used the HSV color space,
        so the alphas of the color were capture in the V (value). Knowing this,
        I built a seperate function that generated a new barcode image using
        only the V values of each HSV color. You can check out some of the
        results{" "}
        <NavLink to="/resume/barcode" className="link">
          here
        </NavLink>
        .
      </p>
    </div>
  );
};

export default BarcodeDevLog;
