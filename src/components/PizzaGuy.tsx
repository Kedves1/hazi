import PizzaGuyPic from "@/img/pizzaguy.png";
import Image from "next/image";

const PizzaGuy = () => {
  return (
    <div className="flex w-screen h-screen absolute top-0 justify-center items-center">
      <div className="">
        <Image
          src={PizzaGuyPic}
          alt=""
          className="select-none pointer-events-none"
        />
      </div>
    </div>
  );
};

export default PizzaGuy;
