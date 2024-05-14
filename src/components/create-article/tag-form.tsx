/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { ErrorMessage } from '@/components/create-article/article.form';

import { api } from '@/trpc/react';

const tagSchema = z.object({
  name: z.string().min(3).max(20),
  description: z.string().min(10).max(400),
});

const TagForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const utils = api.useUtils();

  const { mutate: createTag, isPending } = api.tag.createTag.useMutation({
    onSuccess: () => {
      toast.success('tag added successfully!');
      reset();
      utils.tag.getTags.invalidate();
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ name: string; description: string }>({
    resolver: zodResolver(tagSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => createTag(data))}
      className='relative grid grid-cols-1 gap-y-2'
    >
      <div className='checkout-notice'>
        <div className='coupn-box'>
          <h6 className='toggle-bar'>
            <Link
              href='#'
              style={{ cursor: 'pointer' }}
              onClick={(e: any) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
              className='toggle-btn'
            >
              Create Tag
            </Link>
          </h6>
          {isOpen && (
            <div className='toggle-open'>
              <p>If you have a new tag, please add it below.</p>
              <div className='input-group'>
                <input
                  type='text'
                  disabled={isPending}
                  {...register('name')}
                  placeholder='Enter Tag...'
                />
                <ErrorMessage errorMessage={errors.name?.message} />
              </div>

              <div className='checkout-billing'>
                <div className='form-group mt--50 mb-0'>
                  <label>Description</label>
                  <textarea
                    {...register('description')}
                    id='description'
                    rows={4}
                    placeholder='Enter Description...'
                  />
                  <ErrorMessage errorMessage={errors.description?.message} />
                </div>
              </div>

              <div className='apply-btn'>
                <button type='submit' className='edu-btn btn-medium'>
                  Add
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default TagForm;
