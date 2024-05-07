/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

const Result = () => {
  return (
    <p
      className='success-message'
      style={{
        color: '#1ab69d',
        marginTop: '20px',
        marginBottom: '0',
        textAlign: 'center',
      }}
    >
      Thanks for your query. We will contact with you soon.
    </p>
  );
};

const ContactMeForm = () => {
  const [result, setResult] = useState(false);

  const form = useRef<HTMLFormElement>(null); // Specify the type of ref

  const sendEmail = (e: any) => {
    e.preventDefault();

    const serviceId = process.env.EMAILJS_SERVICE_ID
      ? process.env.EMAILJS_SERVICE_ID
      : '';

    const templateId = process.env.EMAILJS_TEMPLATE_ID
      ? process.env.EMAILJS_TEMPLATE_ID
      : '';

    const publicKey = process.env.EMAILJS_PUBLIC_KEY
      ? process.env.EMAILJS_PUBLIC_KEY
      : '';

    if (!form.current) {
      console.error('Form reference is null');
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );

    e.target.reset();
    setResult(true);
  };

  setTimeout(() => {
    setResult(false);
  }, 5000);

  return (
    <form
      ref={form}
      className='rnt-contact-form rwt-dynamic-form'
      onSubmit={sendEmail}
    >
      <div className='row row--10'>
        <div className='form-group col-lg-6'>
          <input
            type='text'
            name='user_name'
            placeholder='Your Name*'
            required
          />
        </div>
        <div className='form-group col-lg-6'>
          <input
            type='email'
            name='user_email'
            placeholder='Your Email*'
            required
          />
        </div>
        <div className='form-group col-12'>
          <input type='tel' name='user_phone' placeholder='Phone number' />
        </div>
        <div className='form-group col-12'>
          <textarea
            name='message'
            cols={30}
            rows={6}
            placeholder='Type your message'
          ></textarea>
        </div>
        <div className='form-group col-12 text-center'>
          <button
            className='rn-btn edu-btn submit-btn'
            name='submit'
            type='submit'
          >
            Submit Now <i className='icon-4'></i>
          </button>
        </div>
        {result ? (
          <div className='form-group'>
            <Result />
          </div>
        ) : null}
      </div>
    </form>
  );
};

export default ContactMeForm;
