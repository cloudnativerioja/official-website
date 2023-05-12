import {
  ChartBarSquareIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/solid';
import React from 'react';

const benefitOne = {
  title: 'Beneficios de un entorno Cloud Native',
  desc: 'Las tecnologías Cloud Native permiten a los desarrolladores de software crear grandes productos más rápido.',
  image: 'img/kubectl.svg',
  bullets: [
    {
      title: 'Mejora la eficiencia',
      desc: 'Las tecnologías Cloud Native impulan el desarrollo y despliegue de aplicaciones a través de la infraestructura en la nube y la automatización de DevOps.',
      icon: <RocketLaunchIcon />,
    },
    {
      title: 'Incrementa la escalabilidad',
      desc: 'El escalado Cloud Native permite a los desarrolladores mejorar los productos sin preocupaciones de infraestructura.',
      icon: <ChartBarSquareIcon />,
    },
    {
      title: 'Ahorro de costes',
      desc: 'La tecnología Cloud Native reduce los costes mediante el pago por uso y menos mantenimiento.',
      icon: <CurrencyDollarIcon />,
    },
  ],
};

export { benefitOne };
