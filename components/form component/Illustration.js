import Image from "next/image";

const Illustration = ({ image }) => {
  return (
    <div className="hidden md:block my-auto mx-auto">
      <div className="max-w-sm">
        <Image src={image} />
      </div>
    </div>
  );
};

export default Illustration;
