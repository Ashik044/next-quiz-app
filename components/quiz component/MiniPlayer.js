import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import classes from "../../styles/MiniPlayer.module.css";

export default function MiniPlayer() {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);

  const videoUrl = `https://www.youtube.com/watch?v=P55BWKo8Z8o`;


  function toggleMiniPlayer() {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }
  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn} mr-6 mb-2`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        play_circle_filled
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniPlayer}
      >
        close
      </span>

      <ReactPlayer
        className={classes.player}
        url={videoUrl}
        width="300px"
        height="168px"
        playing={status}
        controls
      />

      <p>Hello</p>
    </div>
  );
}
