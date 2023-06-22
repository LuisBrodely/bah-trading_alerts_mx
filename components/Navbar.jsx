"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../assets/logo-trading-alerts-mx.svg";
import Button from "./Button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigation = [
  { name: "Sobre Nosotros", page: '/' },
  { name: "Precios", page: '/precios'},
  { name: "Resultados", page: '/resultados' },
  { name: "Cuenta Discrecional", page: '/cuenta' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="isolate mt-4 mb-4">
      <div className="px-4 lg:px-20 md:px-10">
        <div className="flex lg:flex-1 relative">
          <Link
            href="/"
            className="absolute left-1/2 top-6 md:top-4 transform -translate-x-1/2 "
          >
            <span className="sr-only">Trading Alerts MX</span>
            <Image
              className="h-10 md:h-12 w-auto"
              src={logo}
              alt="Trading Alerts MX - Logo"
              width={'auto'}
              height={'auto'}
              priority
            />
          </Link>
        </div>
        <nav
          className="flex items-center justify-between h-20"
          aria-label="Global"
        >
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-whitePrimary"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menu</span>
              <Bars3Icon className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.page}
                className={`text-sm font-medium leading-6 ${ item.page === pathname ? 'text-whitePrimary ' : 'text-gray-400' }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
            <Button text={"Suscribete"} />
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-[#101010] px-4 py-6 md:py-4 lg:hidden md:px-10"
          >
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-whitePrimary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-7 w-7" aria-hidden="true" />
              </button>
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Trading Alerts MX</span>
                <Image
                  className="h-10 md:h-12 w-auto"
                  src={logo}
                  alt="Trading Alerts MX - Logo"
                  height={'auto'}
                  width={'auto'}
                  priority
                />
              </a>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.page}
                      className={`-mx-3 block py-2 px-3 text-sm font-medium leading-7 text-gray-400 hover:bg-gray-400/10 ${ item.page === pathname ? 'text-whitePrimary bg-gray-400/10' : 'text-gray-400 hover:bg-gray-400/10'}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-2">
                  <a
                    href="#"
                    className="mt-4 block rounded-md py-2.5 px-3 text-sm font-medium leading-6 text-whitePrimary bg-purpleLogo text-center"
                  >
                    Suscribete
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
}
