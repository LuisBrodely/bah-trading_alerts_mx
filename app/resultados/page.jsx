import Image from "next/image";

const posts = [
  {
    imageUrl: require("../../assets/capturas/cap1.jpg"),
  },
  {
    imageUrl: require("../../assets/capturas/cap2.jpg"),
  },
  {
    imageUrl: require("../../assets/capturas/cap3.jpg"),
  },
  {
    imageUrl: require("../../assets/capturas/cap4.jpg"),
  },
  {
    imageUrl: require("../../assets/capturas/cap5.jpg"),
  },
  {
    imageUrl: require("../../assets/capturas/cap6.jpg"),
  },
  {
    imageUrl: require("../../assets/capturas/capp1.jpg"),
  },
  {
    imageUrl: require("../../assets/capturas/cap7.jpg"),
  },
  {
    imageUrl: require("../../assets/capturas/capp2.jpg"),
  },
  {
    imageUrl: require("../../assets/capturas/cap8.jpg"),
  },
];

export default function Resultados() {
  return (
    <>
      <div className="relative bg-gray-50 pt-12 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto">
          <div>
            <div className="text-center">
              <h2 className="text-lg font-semibold leading-8 text-purpleLogo">
                NUESTROS RESULTADOS
              </h2>
              <p className="mt-2 text-3xl md:text-4xl font-bold tracking-tight px-3">
                Con unos minutos al dia <br/>¡Tú tambien podras conseguirlo!
              </p>
              <div className="mx-auto md:max-w-3xl">
                <p className="mt-3 px-4 text-lg leading-8">
                  Somos transparentes por lo que aqui te mostramos resultados que
                  hemos conseguido por medio de nuestras estrategias en la
                  plataforma GBM.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 grid gap-2 px-4 lg:gap-5 lg:max-w-none grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
            {posts.map((post, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-lg shadow-2xl bg-white"
              >
                <Image
                  className={`${index >= 6 && "hidden"} md:block`}
                  src={post.imageUrl}
                  alt="Captura Resultado"
                  width={1370}
                  height={"auto"}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
