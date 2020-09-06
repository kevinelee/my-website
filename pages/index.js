import Head from "next/head";
import Header from "../components/header";
import Intro from "../components/intro";
import Bio from "../components/bio";
import Applications from "../components/applications";
import ContactMe from "../components/contact-me";
import Skills from "../components/skills";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";

export default function Home() {
  const [kevin, setKevin] = useState(null);
  return (
    <>
      <Head>
        <title>Kevin E. Lee</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        ></link>
      </Head>

      <div>
        <div id="section0" className="bg-gray-100">
          <Header />
        </div>
        <div id="section1" className="p-16">
          <Intro />
        </div>
        <div id="section2" className="bg-gray-100 p-16">
          <Bio />
        </div>
        <div id="section3">
          <Applications />
        </div>
        <div id="section4">
          <Skills />
        </div>
        <div id="section5" className="bg-gray-500">
          <ContactMe />
        </div>
      </div>
    </>
  );
}
