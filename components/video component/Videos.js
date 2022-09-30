import Video from "./Video";
import useVideoList from "../../hook/useVideoList";
import Loading from "../../components/loading";

const Videos = () => {
  const { loading, error, videos } = useVideoList(0);

  return (
    <>
      {loading && <Loading />}

      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There wan an error!</div>}

      <div className="w-full mb-8 mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <Video
            title={video.title}
            id={video.youtubeID}
            noq={video.noq}
            keyNumber={video.youtubeID}
          />
        ))}
      </div>
    </>
  );
};

export default Videos;
