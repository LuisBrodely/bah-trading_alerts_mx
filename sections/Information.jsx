import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import img from '../assets/imggraph.jpg'

const features = [
  {
    name: "Bolsa de valores.",
    description:
      "Operamos únicamente acciones americanas con opciones financieras y acciones en directo.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Resultados.",
    description:
      "Te garantizamos que no encontraras algo tan consistente como nosotros.",
    icon: LockClosedIcon,
  },
];

export default function Information() {
  return (
    <div className="overflow-hidden pt-16 md:pt-24 pb-14 md:pb-18" id='info'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-purpleLogo mb-2">
                ¿Qué es Trading Alerts MX?
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-whitePrimary md:text-4xl w-full md:w-[500px]">
                Te Enseñamos a Generar Ingresos Extra Tú Mismo
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                ¡Trade Alerts MX es la mejor alternativa en educación de Trading!
                Somos un equipo experimentado con los que aprenderás
                detalladamente a operar de manera Inteligente controlando tus
                emociones con las mejores herramientas en el mercado. Seras
                capaz de generar ganancias diarias consistentes.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-whitePrimary">
                      <feature.icon
                        className="absolute top-1 left-1 h-5 w-5 text-greenLogo"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline text-gray-300">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="md:flex items-start justify-end lg:order-first hidden">
            <Image
              src={img}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
