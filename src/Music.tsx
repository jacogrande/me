import React from "react";
import "./Nav.css";
import MetaTags from "react-meta-tags";

import Audio from "./Audio";

interface ITunes {
  [key: string]: { title: string; story: string; src: string; year: number };
}

const eventHorizonTunes: ITunes = {
  main_theme: {
    title: "main theme",
    // story:
    // "We landed on Pitune's surface too late. Yago's ship had already been buried by the drifting ash. There must be another way to get to the data.",
    story: `We landed too late. Ash had buried Yago's ship.`,
    src: "/music/mainTheme.m4a",
    year: 2019,
  },
  firstGlimpse: {
    title: "first glimpse",
    story:
      "There's a charging station on Pitune's third moon. Maybe Yago docked there before landing on the planet's surface, and maybe on the way we'll see Novum: the black maw at the galaxy's center.",
    src: "/music/firstGlimpse.m4a",
    year: 2019,
  },
  drifters: {
    title: "drifters",
    story:
      "Captain Uharo told us the last survey found living matter near the charging station, but our ship's scanners found nothing but debris. Our journey must continue.",
    src: "/music/drifters.m4a",
    year: 2019,
  },

  intoTheMaw: {
    title: "into the M.A.W.",
    story:
      "A sudden gravitational rift has begun pulling us toward Novum. Our thrusters are firing at full capacity, but it may not be enough. We can't let our mission end. Not like this.",
    src: "/music/intoTheMaw.m4a",
    year: 2019,
  },
  starbound: {
    title: "starbound",
    story: "test",
    src: "/music/starbound.m4a",
    year: 2019,
  },
  traitors: {
    title: "traitors",
    story: "test",
    src: "/music/traitors.m4a",
    year: 2020,
  },
  theJump: {
    title: "event horizon",
    story: "test",
    src: "/music/theJump.m4a",
    year: 2020,
  },
};

const createHeader = (tune: { title: string; story: string }) => {
  return (
    <>
      <h2>{tune.title}</h2>
      {/* <p className="italics small no-bottom-margin story">{tune.story}</p> */}
      <p className="italics small no-bottom-margin story"></p>
    </>
  );
};

const Music = () => {
  const [selection, setSelection] = React.useState<"event horizon" | "other">(
    "event horizon"
  );

  const eventHorizonArt = [
    <img
      id="astronaut"
      className={selection === "event horizon" ? "fade-in-right" : "fade-out"}
      src={process.env.PUBLIC_URL + "/art/astronaut.png"}
    />,
    <img
      className={selection === "event horizon" ? "fade-in-left" : "fade-out"}
      id="planet"
      src={process.env.PUBLIC_URL + "/art/planet.png"}
    />,
    <img
      className={selection === "event horizon" ? "fade-in" : "fade-out"}
      id="ship"
      src={process.env.PUBLIC_URL + "/art/ship.png"}
    />,
    <img
      className={selection === "event horizon" ? "fade-in-left" : "fade-out"}
      id="astronaut2"
      src={process.env.PUBLIC_URL + "/art/astronaut2.png"}
    />,
  ];

  let artInc = -1;
  const mixedEventHorizonComponents = Object.keys(eventHorizonTunes).map(
    (key, i) => {
      if (i % 2 == 0) {
        artInc++;
        return (
          <React.Fragment key={i}>
            <Audio
              header={createHeader(eventHorizonTunes[key])}
              year={eventHorizonTunes[key].year}
              src={eventHorizonTunes[key].src}
            />
            {eventHorizonArt[artInc]}
          </React.Fragment>
        );
      }
      return (
        <Audio
          header={createHeader(eventHorizonTunes[key])}
          year={eventHorizonTunes[key].year}
          src={eventHorizonTunes[key].src}
          key={i}
        />
      );
    }
  );

  const eventHorizonComponents = (
    <div className="content-container">{mixedEventHorizonComponents}</div>
  );

  const otherComponents = (
    <p className="italics">This stuff is still in the works.</p>
  );

  return (
    <div className="container">
      <MetaTags>
        <title>music : jackson prowell</title>
        <meta name="description" content="Check out some of my music."></meta>
      </MetaTags>
      <h1>music</h1>
      <nav className="two-col-grid">
        <button
          className={`nav-link button-link border-right ${
            selection === "event horizon" && "active-link"
          }`}
          onClick={() => setSelection("event horizon")}
        >
          event horizon
        </button>
        <button
          className={`nav-link button-link no-border ${
            selection === "other" && "active-link"
          }`}
          onClick={() => setSelection("other")}
        >
          other
        </button>
      </nav>
      {/* <div className="vertical-padding"></div> */}
      {selection === "event horizon" ? eventHorizonComponents : otherComponents}
      <footer>
        {selection === "event horizon" && (
          <p className="italics small">art made in blender.</p>
        )}
      </footer>
    </div>
  );
};

export default Music;
