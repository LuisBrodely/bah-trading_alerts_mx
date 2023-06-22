import React from "react";
import img from "../assets/img-trading.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center px-4 md:px-10 lg:px-20 md:justify-between lg:mt-8 lg:py-14">
      <div className="flex items-center flex-col lg:items-start">
        <h1 className="text-center text-gray-400 text-base tracking-[.4em] mt-10 mb-3 lg:mb-5 font-semibold lg:text-left md:text-lg">
          Trading Alerts MX
        </h1>
        <h2 className="text-whitePrimary text-5xl md:text-5xl text-center sm:font-extrabold font-bold lg:text-left xl:text-5xl">
          Invierte con Inteligencia,
          <br />
          Decide con Precisión
        </h2>
        <p className=" text-lg leading-8 text-gray-300 text-center mt-5 lg:mt-8 max-w-xs lg:text-left lg:pr-11 md:max-w-2xl lg:max-w-xl">
          Hemos operado en todos los mercados. A través de innumerables horas de
          Screentime, desarrollando diferentes estrategias. Te garantizamos que
          no encontrarás nada tan consistente como nosotros.
        </p>
        <div className=" mt-11 flex gap-2">
          <h6
            className={`text-semibold text-sm font-semibold text-center text-whitePrimary lg:w-52 w-40 bg-greenLogo py-4 md:block`}
          >
            Suscribirme
          </h6>
          <a
            href='#info'
            className={`text-semibold text-sm font-semibold text-left text-whitePrimary ml-4 py-4 md:block hidden`}
          >
            Más Información {">"}
          </a>
        </div>
      </div>
      <Image
        className="h-auto w-90 mt-10 lg:mt-0 lg:w-1/2"
        src={img}
        alt="Trading Alerts MX - Trading"
        height={"auto"}
        width={"auto"}
        priority
      />
    </main>
  );
};

export default Hero;
