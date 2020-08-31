import React, { ReactComponentElement } from "react";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";
import "./Audio.scss";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import Forward10Icon from "@material-ui/icons/Forward10";
import Replay10Icon from "@material-ui/icons/Replay10";
import "./Music.css";

const customIcons = {
  play: <PlayCircleFilledIcon className="audio-button" fontSize="large" />,
  pause: <PauseCircleFilledIcon className="audio-button" fontSize="large" />,
  forward: <Forward10Icon className="audio-button" fontSize="large" />,
  rewind: <Replay10Icon className="audio-button" fontSize="large" />,
};

interface IAudio {
  header: any;
  year: number;
  src: string
}

const Audio = (props: IAudio) => {
  return (
    <AudioPlayer
      src={process.env.PUBLIC_URL + props.src}
      customIcons={customIcons}
      className="audio-player"
      progressJumpStep={10000}
      header={props.header}
      footer={<p className="italics small story">(event horizon - {props.year})</p>}
    />
  );
};

export default Audio;
