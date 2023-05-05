import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  RocketLaunchIcon,
  ScaleIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/solid';
import React from 'react';

const benefitOne = {
  title: 'Cloud benefits',
  desc: 'Cloud native technologies enable software developers to build great products faster.',
  image: 'img/benefit-one.png',
  bullets: [
    {
      title: 'Improved Efficiency',
      desc: 'Cloud native tech boosts app development and deployment through cloud infra and DevOps automation.',
      icon: <RocketLaunchIcon />,
    },
    {
      title: 'Increased Scalability',
      desc: 'Cloud native scaling lets developers improve products without infrastructure worries.',
      icon: <ChartBarSquareIcon />,
    },
    {
      title: 'Cost Savings',
      desc: 'Cloud native tech reduces costs via pay-as-you-go and less maintenance.',
      icon: <CurrencyDollarIcon />,
    },
  ],
};

const benefitTwo = {
  title: 'Offer more benefits here',
  desc: 'You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.',
  image: 'img/benefit-two.png',
  bullets: [
    {
      title: 'Mobile Responsive Template',
      desc: 'Nextly is designed as a mobile first responsive template.',
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: 'Powered by Next.js & TailwindCSS',
      desc: 'This template is powered by latest technologies and tools.',
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: 'Dark & Light Mode',
      desc: 'Nextly comes with a zero-config light & dark mode. ',
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
