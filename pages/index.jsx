import Head from "next/head";

import AboutShowcase from "../components/AboutShowcase";
import AppShowcase from "../components/AppShowcase";
import TechShowcase from "../components/TechShowcase";

// Home Page Information
export default function HomePage() {
  return (
    <main>
      {/* MAIN WEB NAME TAG */}
      <Head>  <title>Studios D'Rose</title>  </Head>

      {/* MAIN WEB SECTIONS */}
      <div className="relative">

        <div className="mt-5 md:mt-[-0vh]">
          <AboutShowcase />
        </div>

        <div className="mt-5 md:mt-[-0vh]">
          <TechShowcase />
        </div>

        <div className="mt-5 md:mt-[-0vh]">
          <AppShowcase />
        </div>

      </div>
      
    </main>
  );
}
