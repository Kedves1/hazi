import Menu from "@/components/Menu";
import Pizza from "@/components/Pizza";
import PizzaGuy from "@/components/PizzaGuy";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[#fdc845]">
      <Pizza />
      <PizzaGuy />
      <Menu />
    </div>
  );
}
