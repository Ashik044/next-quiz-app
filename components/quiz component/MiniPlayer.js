import { useRef, useState } from "react";
import classes from "../../styles/MiniPlayer.module.css";
import dynamic from "next/dynamic";

export default function MiniPlayer() {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);

  const videoUrl = `https://www.youtube.com/watch?v=P55BWKo8Z8o`;

  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

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
      className={`${classes.miniPlayer} ${classes.floatingBtn} mr-6 mb-2 dark:bg-slate-900 dark:text-white `}
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
