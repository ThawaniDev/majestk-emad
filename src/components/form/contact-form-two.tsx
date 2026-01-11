'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMsg from '../error-msg';

//Types Declaration
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Define validation schema using Yup
const schema: yup.ObjectSchema<FormData> = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'At least 3 characters'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'At least 10 characters'),
});

const ContactFormTwo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data: FormData) => {
    alert(JSON.stringify(data));
    reset();
  });
  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-12 mb-20">
          <div className="it-contact-input-box">
            <input type="text" placeholder="Your Name*" {...register('name')} />
            <ErrorMsg msg={errors.name?.message || ''} />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-12 mb-20">
          <div className="it-contact-input-box">
            <input
              type="email"
              placeholder="Email Address*"
              {...register('email')}
            />
            <ErrorMsg msg={errors.email?.message || ''} />
          </div>
        </div>
        <div className="col-12 mb-20">
          <div className="it-contact-input-box">
            <textarea
              placeholder="Write Your Message*"
              {...register('message')}
            ></textarea>
            <ErrorMsg msg={errors.message?.message || ''} />
          </div>
        </div>
      </div>
      <button type="submit" className="it-btn-red">
        <span>Send Message</span>
      </button>
    </form>
  );
};
export default ContactFormTwo;
