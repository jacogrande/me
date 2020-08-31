import React from "react";
import "./Nav.css";
import "./Journal.css";

import { IEntry, devLogEntries } from "./Entries/entries";
import { NavLink, useParams } from "react-router-dom";
import MetaTags from "react-meta-tags";

const Journal = () => {
  const [section, setSection] = React.useState<"devLog" | "other">("devLog");

  const { category, id } = useParams();

  if (category && id) {
    const entry = devLogEntries.find((movie) => movie.id === id);
    return (
      <div className="container">
        <img src={process.env.PUBLIC_URL + entry?.photoPath} className="banner" alt={entry?.photoAlt} />
        <h2>{entry?.title}</h2>
        <p className="italics small">{entry?.description}</p>
        <div>{entry?.content}</div>
      </div>
    );
  }

  const devLogSection = (
    <div className="covers-container">
      {devLogEntries.map((entry: IEntry) => (
        <NavLink to={`/journal/devLog/${entry.id}`} className="cover col" key={entry.title}>
          <img src={process.env.PUBLIC_URL + entry.photoPath} className="cover-photo" alt={entry.title} />
          <h3 className="cover-title">{entry.title}</h3>
          <p className="italics small cover-description">{entry.description}</p>
        </NavLink>
      ))}
    </div>
  );

  return (
    <div className="container">
      <MetaTags>
        <title>journal : jackson prowell</title>
        <meta name="description" content="Some dev logs, research, and ideas that I want to share."></meta>
      </MetaTags>
      <h1>journal</h1>
      <nav className="two-col-grid">
        <button
          className={`nav-link button-link border-right ${
            section === "devLog" && "active-link"
          }`}
          onClick={() => setSection("devLog")}
        >
          dev log
        </button>
        <button
          className={`nav-link button-link no-border ${
            section === "other" && "active-link"
          }`}
          onClick={() => setSection("other")}
        >
          other
        </button>
      </nav>
      {section === "devLog" ? (
        devLogSection
      ) : (
        <p className="italics">This stuff is still in the works</p>
      )}
    </div>
  );
};

export default Journal;
