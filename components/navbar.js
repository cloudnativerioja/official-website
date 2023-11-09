import Link from 'next/link';
import ThemeChanger from './DarkSwitch';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import React from 'react';
import { CALL_FOR_PAPERS_URL, CNCF_URL, DOCS_URL } from '../app.config';

const Navbar = () => {
  const navigation = [
    {
      name: 'CNCF',
      link: '/#cncf',
    },
    {
      name: 'DevOps Talks',
      link: '/devops-talks',
    },
    {
      name: 'Colabora',
      link: CALL_FOR_PAPERS_URL,
    },
    {
      name: 'FAQs',
      link: '/#faq',
    },
    {
      name: 'Docs',
      link: DOCS_URL,
    },
  ];

  return (
    <div className="w-full">
      {/* annoucement  */}
      <div class="mt-6 mb-6 flex flex-wrap items-center justify-center">
        <Link
          href="https://community.cncf.io/events/details/cncf-cloud-native-rioja-presents-kubernetes-rioja-day/"
          target="_blank"
        >
          <div
            class="p-2 bg-gray-700 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span class="flex items-center justify-center rounded-full bg-cncf uppercase px-3 py-2 text-xs font-bold mr-3">
              <span class="relative flex h-2 w-2 mr-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              KUBERNETES Rioja DAY 2023
            </span>
            <span class="font-semibold mr-2 text-left flex-auto">
              Únete al primer evento Cloud Native en La Rioja
            </span>
            <svg
              class="fill-current opacity-75 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
            </svg>
          </div>
        </Link>
      </div>

      {/* menu  */}
      <nav className="container relative flex flex-wrap items-center justify-between px-8 pb-4 mx-auto lg:justify-between xl:px-0">
        {/* logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <Image
                        src="img/logo-cncf-rioja.svg"
                        alt="CNCF Rioja"
                        width="130"
                        height="50"
                        className="w-60"
                      />
                    </span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href={CNCF_URL}
                      target="_blank"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-cncf rounded-md lg:ml-5"
                    >
                      Únete al grupo
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="mr-1 nav__item" key={index}>
                <Link
                  key={index}
                  href={item.link}
                  className="inline-block px-4 py-2 text-md font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-cncf focus:text-cncf focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href={CNCF_URL}
            target="_blank"
            className="px-6 py-2 text-white bg-accent rounded-md md:ml-5"
          >
            Únete al grupo
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
