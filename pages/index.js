import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';

import { benefitOne, benefitTwo } from '../components/data';
import Video from '../components/video';
import Benefits from '../components/benefits';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials';
import Cta from '../components/cta';
import Faq from '../components/faq';
import PopupWidget from '../components/popupWidget';
import React from 'react';

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Cloud Native Rioja - Cloud Native Computing Foundation (CNCF)
        </title>
        <meta
          name="description"
          content="Cloud Native Computing Foundation (CNCF) user group dedicated to building a strong, open, diverse developer community around the Cloud Native platform and technologies in La Rioja."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Hero />

      <SectionTitle
        pretitle="Cloud Native Computing Foundation"
        title="What is CNCF?"
      >
        The Cloud Native Computing Foundation (CNCF) is an open source software
        foundation that aims to make cloud native computing widely used and
        environmentally sustainable. Cloud native computing employs an open
        source software stack to deploy applications as microservices, packing
        each component into its own container, and dynamically orchestrating
        these containers to optimize resource utilization.
      </SectionTitle>

      <Benefits data={benefitOne} />

      {/* <Benefits imgPos="right" data={benefitTwo} /> */}

      <SectionTitle pretitle="Watch a video" title="Cloud Native Definition">
        Cloud native technologies empower organizations to build and run
        scalable applications in modern, dynamic environments such as public,
        private, and hybrid clouds. Containers, service meshes, microservices,
        immutable infrastructure, and declarative APIs exemplify this approach.
      </SectionTitle>

      <Video />

      <SectionTitle pretitle="Team" title="Know who we are">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />

      <Cta />

      <Footer />

      <PopupWidget />
    </>
  );
};

export default Home;
