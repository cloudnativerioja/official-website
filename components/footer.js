import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Container from './container';
import {
  GITHUB_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from '../app.config';
import { GitHub, LinkedIn, Twitter, YouTube } from './social-icons';

export default function Footer() {
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {' '}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                <Image
                  src="img/logo-cncf-rioja.svg"
                  alt="CNCF Rioja"
                  width="130"
                  height="50"
                  className="w-60"
                />
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              El Community Group de la Cloud Native Computing Foundation (CNCF)
              dedicado a construir una comunidad de desarrolladores fuerte,
              abierta y diversa en torno a la plataforma y tecnologías Cloud
              Native en La Rioja.
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0"></div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0"></div>
          </div>
          <div className="">
            <div>Siguenos</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a href={GITHUB_URL} target="_blank" rel="noopener">
                <span className="sr-only">Github</span>
                <GitHub />
              </a>
              <a href={TWITTER_URL} target="_blank" rel="noopener">
                <span className="sr-only">Twitter</span>
                <Twitter />
              </a>
              <a href={YOUTUBE_URL} target="_blank" rel="noopener">
                <span className="sr-only">YouTube</span>
                <YouTube />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener">
                <span className="sr-only">Linkedin</span>
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400 opacity-60">
          Copyright © {new Date().getFullYear()}. Cloud Native Rioja. All rights
          reserved. Powered by{' '}
          <a href="https://www.civo.com" target="_blank" rel="noopener">
            Civo Cloud
          </a>
          .
        </div>
      </Container>
    </div>
  );
}
