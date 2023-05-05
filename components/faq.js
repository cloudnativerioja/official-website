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
    question: 'Why is CNCF needed?',
    answer:
      'Many firms are recognizing the importance of becoming a software company, even if software is not their primary focus. A prime example of this shift is Airbnb, which is transforming the hospitality sector and causing traditional hotels to face difficulties in keeping up. Cloud native technology enables IT and software to move quickly, and incorporating cloud native tools and techniques facilitates in-house software development, collaboration between business and IT teams, competitive advantage, and superior service delivery to customers. CNCF technologies facilitate cloud portability without being tied to a particular vendor.',
  },
  {
    question: 'Do I need to be a member to participate?',
    answer:
      'No, all are welcome to participate in CNCF projects, events and mailing lists, but if you are from La Rioja, why not?',
  },
  {
    question: 'Why should I join CNCF as a member?',
    answer:
      '<a href="https://docs.google.com/presentation/d/1UGewu4MMYZobunfKr5sOGXsspcLOH_5XeCLyOHKh9LU/edit?usp=sharing" target="_blank">These slides give a good overview</a>',
  },
  {
    question: "I have a question, and I'm not sure whom or where to ask.",
    answer:
      'No worries! <a href="#">Contact us</a> and we will point you in the right direction.',
  },
];

export default Faq;
