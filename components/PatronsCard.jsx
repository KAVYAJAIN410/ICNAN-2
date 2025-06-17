import Image from "next/image";

const Card = ({ image, name, pos }) => {
  return (
    <div  style={{background: "white",border:"1px solid black"}} className=" h-96 w-64 m-4 bg-gradient-to-br  rounded-lg border-solid border-red-800  ">
      <div className="overflow-hidden w-full h-2/3 rounded-lg">
        <Image className="cover w-full" src={image} alt="patron"  />
      </div>
      <div className="text-black h-1/3 flex flex-col justify-center">
        <h1 className="text-center text-xl font-bold leading-tight">{name}</h1>
        <h1 className="text-center text-md font-semibold leading-tight">{pos}</h1>
      </div>
    </div>
  );
};

export default Card;
