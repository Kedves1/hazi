import PizzaPic from "@/img/pizza.png";
import Image from "next/image";

const Pizza = () => {
  return (
    <div className="h-screen w-screen relative">
      <Image
        src={PizzaPic}
        alt=""
        className="animate-spin select-none pointer-events-none absolute bottom-12 left-12"
        width={200}
        height={200}
      />
      <Image
        src={PizzaPic}
        alt=""
        className="animate-spin select-none pointer-events-none absolute bottom-12 right-12"
        width={200}
        height={200}
      />
    </div>
  );
};

export default Pizza;
