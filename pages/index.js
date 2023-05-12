import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';

import { benefitOne } from '../components/data';
import Video from '../components/video';
import Benefits from '../components/benefits';
import Footer from '../components/footer';
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
          content="El Community Group Cloud Native Rioja perteneciente a la Cloud Native Computing Foundation (CNCF) tiene como objetivo construir una comunidad de desarrolladores fuerte, abierta y diversa en torno a la plataforma y tecnologías Cloud Native en La Rioja."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Hero />

      <SectionTitle
        pretitle="Cloud Native Computing Foundation"
        title="Que es la CNCF?"
      >
        La Cloud Native Computing Foundation (CNCF) es una fundación de software
        de código abierto que tiene como objetivo hacer que la informática
        nativa de la nube sea ampliamente utilizada y ambientalmente sostenible.
        La CNCF emplea un conjunto de soluciones de software de código abierto
        para implementar aplicaciones como microservicios, empaquetando cada
        componente en su propio contenedor y orquestando dinámicamente estos
        contenedores para optimizar la utilización de recursos.
      </SectionTitle>

      <Benefits data={benefitOne} />

      {/* <Benefits imgPos="right" data={benefitTwo} /> */}

      <SectionTitle pretitle="Video" title="Definición de Cloud Native">
        Las tecnologías Cloud Native permiten a las organizaciones crear y
        ejecutar aplicaciones escalables en entornos modernos y dinámicos como
        nubes públicas, privadas e híbridas. Los contenedores, los service
        meshes, los microservicios, la infraestructura inmutable y las API
        declarativas ejemplifican este enfoque.
      </SectionTitle>

      <Video />

      <SectionTitle
        pretitle="FAQ"
        title="Preguntas mas respondidas"
      ></SectionTitle>

      <Faq />

      <Cta />

      <Footer />

      <PopupWidget />
    </>
  );
};

export default Home;
