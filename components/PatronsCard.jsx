import Image from "next/image";

const Card = ({ image, name, pos }) => {
  return (
    <div  style={{background: "white",border:"1px solid black"}} className=" h-72 w-56 m-4 bg-gradient-to-br  rounded-lg border-solid border-red-800  ">
      <div className="overflow-hidden h-2/3 rounded-lg">
        <Image className="cover" src={image} alt="patron"  />
      </div>
      <div className="text-black h-1/3 flex flex-col justify-center">
        <h1 className="text-center text-xl font-bold leading-tight">{name}</h1>
        <h1 className="text-center text-md font-semibold leading-tight">{pos}</h1>
      </div>
    </div>
  );
};

export default Card;
