"use client";
import {
  ArrowUturnLeftIcon,
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleLeftRightIcon,
  DocumentChartBarIcon,
  HeartIcon,
  InboxIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XMarkIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import img from '../../assets/2.jpg';
import img2 from '../../assets/3.jpg';
import back from '../../assets/background-team-trading.webp'

const solutions = [
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Live Chat",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
];
const features = [
  {
    name: "Conocimiento profesional",
    description:
      "Para aprovechar el expertise del administrador en los mercados financieros.",
    icon: UsersIcon,
  },
  {
    name: "Ahorro de tiempo",
    description:
      "Al delegar las decisiones de inversión y evitar la necesidad de investigaciones constantes.",
    icon: ClockIcon,
  },
  {
    name: "Diversificación",
    description:
      "De la cartera a través de acceso a diferentes productos y estrategias de inversión.",
    icon: DocumentChartBarIcon,
  },
  {
    name: "Adaptabilidad",
    description:
      "Para ajustar la estrategia rápidamente según las condiciones cambiantes del mercado..",
    icon: ArrowUturnLeftIcon,
  },
  // {
  //   name: "Conocimiento profesional",
  //   description:
  //     "Para aprovechar el expertise del administrador en los mercados financieros.",
  //   icon: UsersIcon,
  // },
  // {
  //   name: "Ahorro de tiempo",
  //   description:
  //     "Al delegar las decisiones de inversión y evitar la necesidad de investigaciones constantes.",
  //   icon: ClockIcon,
  // },
  // {
  //   name: "Diversificación",
  //   description:
  //     "De la cartera a través de acceso a diferentes productos y estrategias de inversión.",
  //   icon: DocumentChartBarIcon,
  // },
  // {
  //   name: "Adaptabilidad",
  //   description:
  //     "Para ajustar la estrategia rápidamente según las condiciones cambiantes del mercado..",
  //   icon: ArrowUturnLeftIcon,
  // },
];
const metrics = [
  {
    id: 1,
    stat: "8K+",
    emphasis: "Companies",
    rest: "use laoreet amet lacus nibh integer quis.",
  },
  {
    id: 2,
    stat: "25K+",
    emphasis: "Countries around the globe",
    rest: "lacus nibh integer quis.",
  },
  {
    id: 3,
    stat: "98%",
    emphasis: "Customer satisfaction",
    rest: "laoreet amet lacus nibh integer quis.",
  },
  {
    id: 4,
    stat: "12M+",
    emphasis: "Issues resolved",
    rest: "lacus nibh integer quis.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="mt-10">
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2" />
          <div className="mx-auto">
            <div className="relative shadow-xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full object-cover"
                  src={back}
                  alt="Personas trabajando en laptops trading"
                  priority
                  width={500}
                  height={'auto'}
                />
                <div className="absolute inset-0 bg-purpleLogo mix-blend-multiply" />
              </div>
              <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-whitePrimary">
                    Te ayudamos con
                  </span>
                  <span className="block text-indigo-200">tus inversiones</span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-whitePrimary sm:max-w-3xl">
                  Delega la gestión de tus inversiones en manos de expertos
                  financieros y libera tu tiempo para lo que realmente importa.
                </p>
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <a
                      href="#"
                      className="flex items-center justify-center border border-transparent bg-white px-4 py-3 text-base font-medium text-purpleLogo shadow-sm sm:px-8"
                    >
                      Suscribirme
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center border border-transparent bg-purpleLogo  px-4 py-3 text-base font-medium text-white shadow-sm sm:px-8"
                    >
                      Conocer más
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Feature Sections */}
        <div className="relative overflow-hidden pt-16 pb-32 px-4 md:px-10 lg:px-20">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48" />
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight  text-whitePrimary">
                      ¿Qué es una cuenta discresional?
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-300">
                      Una cuenta discrecional, también conocida como gestión
                      discrecional de inversiones, es uno de nuestros servicios
                      financieros de inversión en el que se tomamos las mejores
                      decisiones de inversión en nombre del cliente de manera
                      autorizada y sin requerir su aprobación previa para cada
                      transacción individual.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex bg-greenLogo border border-transparent  px-4 py-2.5 text-sm font-medium text-white shadow-sm "
                      >
                        Suscribirme
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-300 pt-6">
                  <blockquote>
                    <div>
                      <p className="text-baseleading-8 text-gray-300">
                        &ldquo;Somos profesionales con experiencia y
                        conocimiento en el mercado de inversiones, listos para
                        ayudarte a alcanzar tus metas financieras. Confía en
                        nuestra experiencia para tomar decisiones de inversión
                        sólidas y maximizar el potencial de tu cartera. &rdquo;
                      </p>
                    </div>
                    <footer className="mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="text-base font-medium text-greenLogo">
                          Trading Alerts MX
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <Image
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={img}
                    alt="Trading Alerts MX - Trading"
                    height={"auto"}
                    width={"auto"}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-whitePrimary">
                      ¿Cómo funciona?
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-300">
                      En nuestro exclusivo servicio de cuenta discrecional, nos
                      encargamos de tomar las decisiones de inversión en tu
                      nombre, basándonos en los objetivos financieros que hemos
                      acordado juntos. Esto significa que tienes la tranquilidad
                      de que podemos realizar compras, ventas y ajustes en tu
                      cartera de inversiones sin necesitar tu aprobación en cada
                      operación específica. Con esta libertad, nos aseguramos de
                      aprovechar oportunidades y optimizar tu cartera de forma
                      eficiente y efectiva.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex border border-transparent bg-purpleLogo bg-origin-border px-4 py-2.5 text-base font-medium text-white shadow-sm"
                      >
                        Suscribirme
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <Image
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={img2}
                    alt="Trading Alerts MX - Trading"
                    height={"auto"}
                    width={"auto"}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Feature Section */}
        <div className="px-4 md:px-10 lg:px-20">
          <div className="mx-auto max-w-4xl py-16 sm:pt-20 sm:pb-24 lg:max-w-full lg:pt-24">
            <h2 className="text-3xl font-bold tracking-tight text-whitePrimary">
              Beneficios de una cuenta discresional
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-whitePrimary">
              En este tipo de cuenta, te brindamos el apoyo necesario para tomar
              decisiones de inversión sin que tengas que aprobar cada operación
              de forma individual, obteniendo los siguientes beneficios.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature, index) => (
                <div key={feature.name}>
                  <div>
                    <div
                      className={`flex h-12 w-12 items-center justify-center ${
                        index % 2 == 0 ? "bg-greenLogo" : "bg-purpleLogo"
                      } bg-opacity-10`}
                    >
                      <feature.icon
                        className={`h-6 w-6 ${
                          index % 2 == 0 ? "text-greenLogo" : "text-purpleLogo"
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3
                      className={`text-lg font-medium text-greenLogo ${
                        index % 2 == 0 ? "text-greenLogo" : "text-purpleLogo"
                      }`}
                    >
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-whitePrimary">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section
        <div className="relative bg-[#1010101]">
          <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <img
                  className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                  alt="People working on laptops"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#101010] xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h2 className="text-base font-semibold">
                <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  Valuable Metrics
                </span>
              </h2>
              <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                Get actionable data that will help grow your business
              </p>
              <p className="mt-5 text-lg text-gray-300">
                Rhoncus sagittis risus arcu erat lectus bibendum. Ut in
                adipiscing quis in viverra tristique sem. Ornare feugiat viverra
                eleifend fusce orci in quis amet. Sit in et vitae tortor, massa.
                Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam
                sit tellus quis at.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                {metrics.map((item) => (
                  <p key={item.id}>
                    <span className="block text-2xl font-bold text-white">
                      {item.stat}
                    </span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">
                        {item.emphasis}
                      </span>{" "}
                      {item.rest}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="bg-whitePrimary">
          <div className="mx-auto max-w-4xl py-16 px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">¿Listo para comenzar?</span>
              <span className="-mb-1 block bg-greenLogo bg-clip-text pb-1 text-transparent">
                Conoce nuestros planes y suscribete.
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
              <a
                href="#"
                className="flex items-center justify-center border border-transparent bg-greenLogo px-4 py-3 text-sm font-medium text-white shadow-sm "
              >
                Suscribirme
              </a>
              <a
                href="#"
                className="flex items-center justify-center border border-transparent bg-indigo-50 px-4 py-3 text-sm font-medium text-greenLogo shadow-sm hover:bg-indigo-100"
              >
                Ver planes
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
