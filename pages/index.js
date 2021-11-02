import Head from "next/head";
import Header from "../components/header";
import Intro from "../components/intro";
import Bio from "../components/bio";
import Applications from "../components/applications";
import ContactMe from "../components/contact-me";
import Skills from "../components/skills";
import Section from "../components/section";
import { useState } from "react";
import Link from "next/link";
import IndeedButton from "../components/indeed-button";

export default function Home() {
  const [kevin, setKevin] = useState(null);
  return (
    <>
      <Head>
        <title>Kevin E. Lee</title>
        <link rel="icon" href="/k.png" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <div className="fade-in">
        <IndeedButton />
        <Section
          number="0"
          className="bg-gray-100 md:sticky md:top-0 z-50 md:shadow-sm"
        >
          <Header />
        </Section>

        {/* <Section number="1" className="p-4">
          <Intro />
        </Section> */}

        <Section number="2" className="">
          <Bio />
        </Section>

        <Section number="3" className="bg-gray-100">
          <Applications />
        </Section>

        <Section number="4">
          <Skills />
        </Section>

        <Section number="5" className="bg-gray-500">
          <ContactMe />
        </Section>
      </div>
    </>
  );
}
