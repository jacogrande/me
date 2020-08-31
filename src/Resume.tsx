import React from "react";
import "./Resume.css";
import LineTo from "react-lineto";
import { NavLink, useParams } from "react-router-dom";
import Encryptor from "./ResumeComponents/Encryptor";
import Pie from "./ResumeComponents/Pie";
import FB from "./ResumeComponents/FB";
import Aesap from "./ResumeComponents/Aesap";
import Pokemon from "./ResumeComponents/Pokemon";
import Hashbrowns from "./ResumeComponents/Hashbrowns";
import KTM from "./ResumeComponents/KTM";
import Barcode from "./ResumeComponents/Barcode";
import Intake from "./ResumeComponents/Intake";
import MetaTags from "react-meta-tags";

interface IResumeData {
  title: string;
  description?: string;
  image?: string;
  location: "left" | "middle" | "right";
  href?: string;
}

const resumeData: IResumeData[] = [
  {
    title: "Encryptor (2012)",
    description: "My first programming project",
    image: "/covers/encryptor.png",
    location: "left",
    href: "/resume/encryptor",
  },
  {
    title:
      "I spent my first few years learning fundamentals through Codecademy's Javascript, HTML, and CSS courses.",
    location: "middle",
  },
  {
    title: "PiE Robotics (2016)",
    description: "Programmer on the 2016 PiE Robotics championship team.",
    image: "/covers/pie.png",
    location: "right",
    href: "/resume/pie",
  },
  {
    title:
      "I started homeschooling my sophomore year of highshool, and I had a lot more time to refine my coding skills.",
    location: "middle",
  },
  {
    title: "FB Cleaner (2017)",
    description:
      "[Deprecated] Chrome extension that deletes all of a user's facebook data.",
    image: "/covers/fb.png",
    location: "left",
    href: "/resume/fb",
  },
  {
    title: "Aesap (2017)",
    description: "Chatbot for slack.",
    image: "/covers/aesap.png",
    location: "middle",
    href: "/resume/aesap",
  },
  {
    title: "Pokemon Rocket (2018)",
    description: "Homemade Pokemon game engine.",
    image: "/covers/pokemon.png",
    location: "right",
    href: "/resume/pokemon",
  },
  {
    title: "Hashbrowns (2018)",
    description: "GNU Bash SHA-1 implementation.",
    image: "/covers/hashbrowns.png",
    location: "middle",
    href: "/resume/hashbrowns",
  },
  {
    title:
      "In 2018 I enrolled at City College of San Francisco as a Computer Science major, and I spent the next two years taking computer science classes.",
    location: "left",
  },
  {
    title: "Kitchen Table Magic (2020)",
    description: "A digital platform for playing Magic: The Gathering",
    image: "/covers/ktm.png",
    location: "middle",
    href: "/resume/ktm"
  },
  {
    title: "Barcode (2020)",
    description:
      "A python script that generates color barcodes for video files.",
    image: "/covers/barcode.jpg",
    location: "right",
    href: "/resume/barcode",
  },
  {
    title: "Intake (2020)",
    description: "A platform for tracking media consumption.",
    image: "/covers/intake.png",
    location: "middle",
    href: "/resume/intake",
  },
];

const Resume = () => {
  const { project } = useParams();

  const getProject = () => {
    switch (project) {
      case "encryptor":
        return <Encryptor />;
      case "pie":
        return <Pie />;
      case "fb":
        return <FB />
      case "aesap":
        return <Aesap />
      case "pokemon":
        return <Pokemon />
      case "hashbrowns":
        return <Hashbrowns />
      case "ktm":
        return <KTM />
      case "barcode":
        return <Barcode />
      case "intake":
        return <Intake />
    }
    
  }
  if (project) return (
    <>
      <MetaTags>
        <title>{project} : jackson prowell</title>
        <meta name="description" content="Check out one of my projects."></meta>
      </MetaTags>
      {getProject()}
    </>
  )
    

  return (
    <div className="container">
      <MetaTags>
        <title>resume : jackson prowell</title>
        <meta name="description" content="See my project portfolio."></meta>
      </MetaTags>
      <h1>virtual resume</h1>
      {resumeData.map((node, i) => (
        <div className={node.location} key={node.title}>
          {node.description ? (
            <div className="node-container">
              <NavLink to={node.href as string}>
                <div className={`node node${i}`}>
                  <img src={process.env.PUBLIC_URL + node.image} alt={node.title} />
                </div>
              </NavLink>
              <p className="no-bottom-margin">{node.title}</p>
              <p className="italics no-top-margin">{node.description}</p>
            </div>
          ) : (
            <div className={`node text-node node${i}`}>
              <p>{node.title}</p>
            </div>
          )}
          {i > 0 && (
            <LineTo
              from={`node${i - 1}`}
              to={`node${i}`}
              borderColor="#A8DADC"
              delay={0}
              className="lines"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Resume;
