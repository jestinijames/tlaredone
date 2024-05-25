/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { ErrorMessage } from '@/components/create-article/article-form';

import { api } from '@/trpc/react';

const commentSchema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email().max(50),
  text: z.string().min(3),
});

const ArticleCommentForm = ({ postId }: { postId: string }) => {
  const router = useRouter();
  const utils = api.useUtils();

  const { mutate, isPending } = api.comment.createComment.useMutation({
    onSuccess: () => {
      toast.success('comment added successfully to be reviewed!');
      reset();
      utils.comment.getComments.invalidate({ postId }), reset();

      router.refresh();
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ name: string; email: string; text: string; postId: string }>({
    resolver: zodResolver(commentSchema),
  });

  // Recaptcha
  const [ReactCaptcha, setReactCaptcha] = useState(null as any);
  const [render, setRender] = useState(false);
  useLayoutEffect(() => {
    async function loadModule() {
      setReactCaptcha(await import('react-simple-captcha'));
    }
    loadModule();
  }, []);

  useLayoutEffect(() => {
    if (ReactCaptcha) {
      setRender(true);
    }
  }, [ReactCaptcha]);

  useEffect(() => {
    if (render) {
      setTimeout(() => {
        ReactCaptcha.loadCaptchaEnginge(
          6,
          '#07090e',
          'rgb(0, 200, 0)',
          'lower'
        );
      }, 250);
    }
  }, [render]);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        const userCaptchaInput = document.getElementById(
          'captchaText'
        ) as HTMLInputElement;

        if (
          userCaptchaInput &&
          ReactCaptcha.validateCaptcha(userCaptchaInput.value)
        ) {
          toast('Captcha Matched');
          ReactCaptcha.loadCaptchaEnginge(6);
          mutate({
            ...data,
            postId,
          });
        } else {
          toast('Captcha Does Not Match');
        }
      })}
      className='comment-form'
    >
      <div className='row g-5'>
        <div className='form-group col-lg-6'>
          <input
            type='text'
            id='contact-name'
            placeholder='Your Name'
            disabled={isPending}
            {...register('name')}
          />
          <ErrorMessage errorMessage={errors.name?.message} />
        </div>

        <div className='form-group col-lg-6'>
          <input
            disabled={isPending}
            {...register('email')}
            type='email'
            id='contact-email'
            placeholder='Your Email'
          />
          <ErrorMessage errorMessage={errors.email?.message} />
        </div>

        <div className='form-group col-12'>
          <textarea
            disabled={isPending}
            {...register('text')}
            id='comm-message'
            cols={30}
            rows={5}
            placeholder='Leave A Comment'
          ></textarea>
          <ErrorMessage errorMessage={errors.text?.message} />
        </div>

        <div className='form-group'>
          <input
            disabled={isPending}
            type='text'
            id='captchaText'
            placeholder='Enter Captcha'
          />
          <div
            style={{
              marginTop: '2rem',
            }}
            className='captcha'
          >
            {render ? <ReactCaptcha.LoadCanvasTemplate /> : null}
          </div>
        </div>

        <div className='form-group'>
          <div className='edu-form-check'>
            <label htmlFor='save-info'>
              Please note that any comments will be published only after it has
              been reviewed.
            </label>
          </div>
        </div>
        <div className='form-group col-12'>
          <button type='submit' className='edu-btn submit-btn'>
            Send Message <i className='icon-4'></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ArticleCommentForm;
