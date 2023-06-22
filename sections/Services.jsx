import React from "react";

const Services = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 mt-4">
      <h5 className="text-3xl font-semibold text-whitePrimary md:text-4xl lg:text-5xl">
        Nuestros Servicios
      </h5>
      <div className=" mt-10 grid lg:grid-rows-2 lg:grid-cols-3 gap-4 md:grid-cols-2">
        <div className="row-span-2 bg-[url('../assets/trading-back.jpg')] bg-cover bg-center hidden lg:block"></div>
        <div className="col-span-1 min-h-[240px] md:h-[325px] bg-blackSecundary py-12 pl-8">
          <h5 className="text-whitePrimary font-semibold lg:text-2xl text-xl">
            Señales de Trading
          </h5>
          <div className="h-1 bg-greenLogo w-24 mt-4 mb-5"></div>
          <p className="text-gray-300 pr-8">
            Proporcionar señales precisas y oportunas de compra y venta de
            acciones en el mercado, respaldadas por análisis y estrategias
            sólidas.
          </p>
        </div>
        <div className="col-span-1 min-h-[240px] md:h-[325px] bg-blackSecundary py-12 pl-8">
          <h5 className="text-whitePrimary font-semibold lg:text-2xl text-xl">
            Análisis de Mercado
          </h5>
          <div className="h-1 bg-purpleLogo w-24 mt-4 mb-5"></div>
          <p className="text-gray-300  pr-8">
            Realizar un exhaustivo análisis del mercado de valores, identificando
            tendencias, patrones y oportunidades de inversión para ayudar a los
            clientes a tomar decisiones informadas.
          </p>
        </div>
        <div className="col-span-1 min-h-[240px] md:h-[325px] bg-blackSecundary py-12 pl-8">
          <h5 className="text-whitePrimary font-semibold lg:text-2xl text-xl">
            Educación y Capacitación
          </h5>
          <div className="h-1 bg-purpleLogo w-24 mt-4 mb-5"></div>
          <p className="text-gray-300  pr-8">
            Proporcionar recursos educativos, seminarios y capacitaciones en
            trading y estrategias de inversión para empoderar a los clientes y
            ayudarles a mejorar sus habilidades y conocimientos financieros.
          </p>
        </div>
        <div className="col-span-1 min-h-[240px] md:h-[325px] bg-blackSecundary py-12 pl-8">
          <h5 className="text-whitePrimary font-semibold lg:text-2xl text-xl">
            Informes de Investigación
          </h5>
          <div className="h-1 bg-greenLogo w-24 mt-4 mb-5"></div>
          <p className="text-gray-300 pr-8">
            Elaborar informes detallados sobre empresas, sectores y tendencias
            del mercado para brindar a los clientes información valiosa que
            respalde sus decisiones de inversión.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
