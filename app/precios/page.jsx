import React from 'react'
import CTA from '@/sections/CTA'

import { CheckIcon } from '@heroicons/react/24/outline'

const tiers = [
  {
    id: 'tier-hobby',
    name: 'Mensual',
    href: '#',
    priceMonthly: 25,
    description: 'Con nuestro plan de pago recibes en el grupo de Discord alertas en tiempo real con entradas y salidas operaciones del mismo día y largo plazo.',
    features: [
      'Análisis del mercado',
      'Reporte Semanal en donde explicamos nuestro plan para la siguiente semana',
      'Sesiones 1 a 1',
      'Comunidad de Traders',
      'Sesiones en Vivo de Trading',
      'Guía paso a paso'
    ],
  },
  {
    id: 'tier-team',
    name: 'Gratis',
    href: '#',
    priceMonthly: 0,
    description: 'Con nuuestro plan gratuito puedes comenzar en el mundo del Trading,  por medio de analisis del mercado junto con noticias de interes.',
    features: [
      'Análisis del mercado',
      'Reporte Semanal en donde explicamos nuestro plan para la siguiente semana'
    ],
  },
]

export default function Precios() {
  return (
    <>
    <div className="">
      <div className="relative overflow-hidden pt-16 pb-96 lg:pt-24">
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-lg font-semibold leading-8 text-greenLogo">MEMBRESIAS</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white">
              Planes hechos para ti <br className="hidden sm:inline lg:hidden" />
              y tus necesidades.
            </p>
            <p className="mt-6 text-lg leading-8 text-white/60">
              Estamos dirigidos a personas interesadas el las inversiones y trading, tanto principiantes sin conocimiento como personas experimentadas en el ambiente.
            </p>
          </div>
        </div>
      </div>
      <div className="flow-root bg-white pb-32 lg:pb-40">
        <div className="relative -mt-80">
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8">
              {tiers.map((tier) => (
                <div key={tier.name} className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
                  <div className="p-8 sm:p-10">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600" id={tier.id}>
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                      ${tier.priceMonthly}
                      <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">/USD</span>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">{tier.description}</p>
                  </div>
                  <div className="flex flex-1 flex-col p-2">
                    <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                      <ul role="list" className="space-y-6">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="h-6 w-6 text-purpleLogo" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-600">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <a
                          href={tier.href}
                          className="inline-block w-full rounded-lg bg-greenLogo px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-indigo-700"
                          aria-describedby={tier.id}
                        >
                          Suscribete Ahora
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}