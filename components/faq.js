import React from 'react';
import Container from './container';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    <div
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    ></div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: 'Porque la CNCF es necesaria?',
    answer:
      'Muchas empresas reconocen la importancia de convertirse en una empresa de software, incluso si el software no es su principal objetivo. Un ejemplo claro de este cambio es Airbnb, que está transformando el sector de la hostelería y causando dificultades a los hoteles tradicionales para mantenerse al día y seguirle el ritmo. permite que las TI y el software se muevan con rapidez, y la incorporación de herramientas y técnicas nativas de la nube facilita el desarrollo interno de software, la colaboración entre los equipos de negocio y de TI, la ventaja competitiva y la prestación de servicios superiores a los clientes. Las tecnologías CNCF facilitan la portabilidad de la nube sin estar atado a un proveedor concreto.',
  },
  {
    question: '¿Necesito ser miembro para participar?',
    answer:
      'No, todos son bienvenidos a participar en los proyectos, eventos y listas de correo del CNCF, pero si eres de La Rioja, ¿por qué no?',
  },
  {
    question: 'Porque debería unirme a la CNCF como miembro?',
    answer:
      '<a href="https://docs.google.com/presentation/d/1UGewu4MMYZobunfKr5sOGXsspcLOH_5XeCLyOHKh9LU/edit?usp=sharing" target="_blank">Estas slides es un buen resumen</a>',
  },
  {
    question:
      'Tengo una pregunta, y no estoy seguro de a quién o dónde preguntar.',
    answer:
      'no te preocupes! Entra al canal de <a href="https://t.me/CloudNativeRioja/1">Telegram</a> y te llevaremos en la mejor dirección.',
  },
];

export default Faq;
