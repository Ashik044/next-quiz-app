import Image from "next/image";
import image from "../../public/success.png";

const Summary = ({ score, noq }) => {
  return (
    <div className="mt-10 mx-auto grid grid-cols-1 md:grid-cols-2">
      <div className="w-full h-full flex justify-center items-center">
        <div className="text-center">
          <p className="text-lg md:text-2xl font-bold dark:text-white">
            Your score is <br />
            {score} out of {noq * 5}
          </p>
        </div>
      </div>

      <div className="max-w-sm mx-auto">
        <Image src={image} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
