import Image from 'next/image';
import Container from './container';
import React from 'react';
import { CNCF_URL, GITHUB_URL } from '../app.config';

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              <strong className="uppercase">Haz el Cloud Native</strong>
              <br />
              <i
                className="cursor-help"
                title="Nativo, relacionado o típico de La Rioja"
              >
                ¡riojeño!
              </i>
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Este Community Group perteneciente a la CNCF se dedica a construir
              una comunidad de desarrolladores fuerte, abierta y diversa en
              torno a la plataforma y tecnologías Cloud Native en La Rioja.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href={CNCF_URL}
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-accent rounded-md "
              >
                Únete al grupo
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
              >
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span>Encuentranos en Github</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src="img/kubernetes-logo.png"
              width="616"
              height="617"
              className="object-cover"
              alt="Cloud Hub"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Mas de <span className="text-cncf">56K+</span> Miembros de los
            Community Groups en el mundo
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400 opacity-40">
              <Image
                src="https://raw.githubusercontent.com/cncf/artwork/master/other/kubernetes-forum/general/black/kubernetes-forum-general-black.svg"
                alt="N"
                width="136"
                height="25"
                className="w-25"
              />
            </div>
            <div className="pt-4 text-gray-400 dark:text-gray-400 opacity-40">
              <Image
                src="https://raw.githubusercontent.com/cncf/artwork/main/other/kubernetes-community-days/horizontal/black/kcd-logo-black.svg"
                alt="N"
                width="136"
                height="25"
                className="w-25"
              />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400 opacity-40">
              <Image
                src="https://raw.githubusercontent.com/cncf/artwork/master/other/csi/horizontal/black/csi-horizontal-black.svg"
                alt="N"
                width="136"
                height="25"
                className="w-25"
              />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400 opacity-40">
              <Image
                src="https://raw.githubusercontent.com/cncf/artwork/master/other/envoycon/horizontal/black/envoycon-horizontal-black.svg"
                alt="N"
                width="136"
                height="25"
                className="w-25"
              />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400 opacity-40">
              <Image
                src="https://www.civo.com/assets/public/brand-assets/civo-logo-black-930bec3ea42e1bb8c51ddb4ff6ad6f1d9957e16cc030ef89fd01be602d0cf796.svg"
                alt="N"
                width="136"
                height="25"
                className="w-25"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
