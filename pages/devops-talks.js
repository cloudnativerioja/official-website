import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Cta from '../components/cta';
import Faq from '../components/faq';
import PopupWidget from '../components/popupWidget';
import YouTubePlaylist from '@codesweetly/react-youtube-playlist';
import {
  YOUTUBE_API_KEY,
  YOUTUBE_TALKS_PLAYLIST,
  YOUTUBE_TALKS_PLAYLIST_URL,
} from '../app.config';
import Container from '../components/container';
import SectionTitle from '../components/sectionTitle';

const DevOpsTalksPage = () => {
  return (
    <>
      <Head>
        <title>DevOps Talks - Cloud Native Rioja</title>
        <meta
          name="description"
          content="Reunión mensual para explorar los principios y las prácticas de DevOps. Se discutirán temas como la automatización de procesos, la integración y entrega continuas (CI/CD), la gestión de la configuración ,infraestructura como código, kubernetes, herramientas actuales y observabilidad. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <SectionTitle pretitle="Reunión mensual" title="DevOps Talks">
        <p>
          Nos juntamos para explorar los principios y las prácticas de DevOps.
          Se discutirán temas como la automatización de procesos, la integración
          y entrega continuas (CI/CD), la gestión de la configuración
          ,infraestructura como código, kubernetes, herramientas actuales y
          observabilidad.
        </p>

        <a
          href={YOUTUBE_TALKS_PLAYLIST_URL}
          target="_blank"
          rel="noopener"
          className="inline-block mt-5 px-5 py-2 text-lg font-normal text-center text-white bg-cncf rounded-md "
        >
          <span>Ir al canal de YouTube</span>
        </a>
      </SectionTitle>

      <Container className="!p-0">
        <YouTubePlaylist
          uniqueName="devops-yt-playlist"
          apiKey={YOUTUBE_API_KEY}
          playlistId={YOUTUBE_TALKS_PLAYLIST}
        />
      </Container>

      <Faq />

      <Cta />

      <Footer />

      <PopupWidget />
    </>
  );
};

export default DevOpsTalksPage;
