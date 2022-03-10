import React from 'react';

import { init, sendForm } from '@emailjs/browser';
import { notification } from 'antd';
import { useForm } from 'react-hook-form';

import emailConfig from '@/utils/emailkey';

import { ContactFormSVG } from './ContactFormSVG';

init('vTzcOP7KDtaoiiUk3');

export function SupportForm() {
  const { register } = useForm();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    sendForm(
      `service_8el2x9c`,
      emailConfig.TEMPLATE_ID,
      e.target,
      emailConfig.USER_ID,
    ).then(
      () => {
        notification.open({
          message: 'Message Sent',
          description:
            'Thanks for reaching out. Our team will get back to you shortly.',
          duration: 20,
        });
      },
      () => {
        notification.open({
          message: 'Unable to send your message',
          description: 'Please try after some time!',
          duration: 5,
        });
      },
    );
  };
  return (
    <form
      className=" py-12 px-8 w-full text-gray-100 bg-teal"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-8  py-16 px-8 md:px-12 lg:px-16 mx-auto mt-24 text-gray-900 bg-gray-100 rounded-lg shadow-lg s:flex-col xl:px-32 max-w-screen-xl">
        <ContactFormSVG />
        <div className=" m-auto w-1/2 s:w-full ">
          <div>
            <span className="text-sm font-bold text-gray-600 uppercase">
              Full Name
            </span>
            <input
              className="p-3 mt-2 w-full text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="John Doe"
              {...register('fname')}
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold text-gray-600 uppercase">
              Email
            </span>
            <input
              className="p-3 mt-2 w-full text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="johndoe@xyz.in"
              {...register('email')}
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold text-gray-600 uppercase">
              Message
            </span>
            <textarea
              placeholder="tell us in detail..."
              className="p-3 mt-2 w-full h-32 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
              {...register('message')}
            ></textarea>
          </div>
          <div className="mt-8">
            <button
              //   onClick={handleSubmit}
              type={'submit'}
              className="p-3 w-full text-sm font-bold tracking-wide text-gray-100 uppercase bg-indigo-500 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
