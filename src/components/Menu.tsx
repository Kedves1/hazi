import React from "react";

const Menu = () => {
  const Pizzas = [
    {
      name: "Márió kedvence",
      desc: "Bolognai szósz, Parmezán sajt, Pepperoni, Gomba",
    },
    {
      name: "Parasztos",
      desc: "Tejföl, Sajt, Hagyma, Szallona, Kolbász",
    },
    {
      name: "Ananászos",
      desc: "Bolognai szósz, Sajt, Ananász, idk who tf eats this",
    },
  ];

  const Contacts = [
    "06203459918",
    "mammapizza@gmail.com",
    "@mamma.pizza.intsa",
    "@mamma.pizza.facebook",
  ];

  return (
    <div className="w-screen h-screen absolute top-0 justify-center items-center flex">
      <div className="w-[600px] h-[800px] bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-[0px_-15px_20px_-2px_#22c55e,0px_15px_20px_-2px_#ef4444,15px_0px_20px_10px_#fff,-15px_0px_20px_10px_#fff] relative">
        <div className="text-white">
          <div className="px-20 py-10">
            <div className="text-6xl">
              <span className="text-green-400">Mamma</span> mia!{" "}
              <div className="text-red-600">Pizzeria!</div>
            </div>
            <div className="">
              Egyen friss olaszos pizzát nálunk! {"(⁠｡⁠•̀⁠ᴗ⁠-⁠)⁠✧"}
            </div>
          </div>
          <div className="text-white flex gap-5 text-[12px] w-max m-auto border-b-2 border-b-white underline-offset-8">
            {Contacts.map((contact) => {
              return (
                <div className="" key={contact}>
                  {contact}
                </div>
              );
            })}
          </div>
          <div className="px-20 mt-10">
            <div className="w-full m-auto border-b-2 border-b-white underline-offset-8 text-4xl">
              Pizzák
            </div>
            <ul className="list-disc px-10 py-2">
              {Pizzas.map((pizza) => {
                return (
                  <li className="text-2xl" key={pizza.name}>
                    <div className="">{pizza.name} </div>
                    <div className="text-[15px] text-slate-400">
                      {pizza.desc}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <div className="text-center text-3xl mt-14">
              Budapest XIII. kerület, Gömb utca 22.
            </div>
            <div className="text-center text-slate-300 px-10">
              Egyen az újonnan felújított éttermünkben! A nyitás alkalmából az
              első 300 vásárló rendeléséből elengedünk 20%-ot!!!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
