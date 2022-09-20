import Video from "./Video";

const Videos = () => {
  return (
    <div className="w-full mb-8 mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
};

export default Videos;
