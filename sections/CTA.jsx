import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="py-14 px-6 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Unete Hoy.
            <br />
            Invierte Inteligentemente.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Comienza a generar ingresos extra tú mismo, buscamos transformar la
            forma en que las personas interactúan con el mercado de valores.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className=" bg-greenLogo px-8 py-1.5 text-base font-semibold leading-7 text-whitePrimary shadow-sm"
            >
              Suscribete
            </a>
            <Link
              href="/precios"
              className="text-sm md:text-base font-semibold leading-7 text-white"
            >
              Nuestros planes {">"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
