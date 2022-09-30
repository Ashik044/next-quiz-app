import { useRef, useState } from "react";
import classes from "../../styles/MiniPlayer.module.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function MiniPlayer() {
  var router = useRouter();
  var id = router.query["id"];

  const buttonRef = useRef();
  const [status, setStatus] = useState(false);

  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

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
      className={`${classes.miniPlayer} ${classes.floatingBtn} mr-6 mb-2 dark:bg-slate-900 dark:text-white select-none`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <BsFillPlayCircleFill className={classes.open} />
      
        <AiOutlineCloseCircle
          className={`${classes.close} dark:bg-black bg-white`}
          onClick={toggleMiniPlayer}
        />
     
      <ReactPlayer
        className={classes.player}
        url={videoUrl}
        width="300px"
        height="168px"
        playing={status}
        controls
      />

      <p>Hi</p>
    </div>
  );
}
