import React from 'react';
import Link from 'next/link';

const Annoucement = () => {
  return (
    <div className="md:mt-8 md:mb-8 flex flex-wrap items-center justify-center">
      <Link href="https://kubefest.com" target="_blank">
        <div
          className="p-2 bg-gray-700 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="flex items-center justify-center rounded-full bg-cncf uppercase px-3 py-2 text-xs font-bold mr-3">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            KubeFest 2024 - 6 Abril
          </span>
          <span className="font-semibold mr-2 text-left flex-auto">
            1er Evento de Kubernetes en La Rioja
          </span>
          <svg
            className="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default Annoucement;
