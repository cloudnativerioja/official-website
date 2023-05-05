import React from 'react';
import Container from './container';
import { TELEGRAM_URL } from '../app.config';

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-cncf px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Join to our Telegram Community
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Stay up to date with our latest news and events
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener"
            className="py-3 mx-auto text-lg font-medium text-center text-cncf bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Join Telegram
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Cta;
