import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";import Image from "next/image";
import Info from "@/sections/Information";
import Footer from "@/components/Footer";
import Services from "@/sections/Services";
import CTA from "@/sections/CTA";
import Contact from "@/sections/Contact";
import Testimonials from "@/sections/Testimonials";

const companies = [
  {
    company: "InteractiveBrokers",
    url: require("../assets/companies/interactivebrokers.svg"),
  },
  {
    company: "Ameritrade",
    url: require("../assets/companies/ameritrade.svg"),
  },
  {
    company: "GBM+",
    url: require("../assets/companies/gbm.svg"),
  },
  {
    company: "SYMBOLIK",
    url: require("../assets/companies/symbolik.svg"),
  },
  {
    company: "Cheddar Flow",
    url: require("../assets/companies/cheddarflow.svg"),
  },
];


const Page = () => {
  return (
    <div>
      <Hero />
      <section className=" grid-cols-5 gap-4 px-4 md:px-10 lg:px-20 hidden lg:grid mt-16 h-14">
        {companies.map((company, index) => (
          <div className="bg-blackSecundary flex items-center justify-center" key={index}>
            <Image
              className={`${company.company === 'GBM+' && 'w-20'}`}
              src={company.url}
              width={130}
              height={0}
              alt={company.company}
              priority
            />
          </div>
        ))}
      </section>
      <Info/>
      <Services/>
      <Testimonials/>
      {/* <Contact/> */}
      <CTA/>
    </div>
  );
};

export default Page;
