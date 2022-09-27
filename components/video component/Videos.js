import Video from "./Video";
import useVideoList from "../../hook/useVideoList";

const Videos = () => {
  const { loading, error, videos } = useVideoList(0);

  return (
    <div className="w-full mb-8 mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <Video
          title={video.title}
          id={video.youtubeID}
          noq={video.noq}
          keyNumber={video.youtubeID}
        />
      ))}

      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There wan an error!</div>}
      {loading && (
        <div className="w-full h-screen bg-slate-100 dark:bg-slate-700">
          Loading...
        </div>
      )}
    </div>
  );
};

export default Videos;
