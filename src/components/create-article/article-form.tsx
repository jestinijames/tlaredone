/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { api } from '@/trpc/react';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { toast } from 'react-toastify';

import 'react-quill/dist/quill.snow.css';

import MultiSelect from '@/components/ui/combobox/multi-select';

interface IFormInputs {
  title: string;
  description: string;
  text: string;
  featuredImage: string;
}

type Option = { label: string; id: string };

const postSchema = z.object({
  title: z.string().min(20).max(40),
  description: z.string().min(95).max(200),
  text: z.string().min(80),
  featuredImage: z.string().min(80),
});

const ArticleForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    control,
  } = useForm<IFormInputs>({
    resolver: zodResolver(postSchema),
  });

  const router = useRouter();
  const utils = api.useUtils();

  const { data: tags } = api.tag.getTags.useQuery();

  const createPost = api.post.createPost.useMutation({
    onSuccess: () => {
      utils.post.getPosts.invalidate();
      toast.success('Post has been created successfully!');
      reset();
      router.refresh();
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const [selectedTags, setSelectedTags] = useState<Option[]>([]);

  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { data } = api.unsplash.getImages.useQuery(
    { query: searchTerm },
    {
      enabled: !!searchTerm, // Only run the query if searchTerm is not empty
    }
  );

  const handleSearch = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (query.length >= 5) {
      setSearchTerm(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit((data) =>
        createPost.mutate({
          ...data,
          tagIds: selectedTags.map((tag) => ({ id: tag.id })),
        })
      )}
      className='flex flex-col gap-2'
    >
      <div className='row row--25'>
        <div>
          <div className='checkout-billing'>
            <h3 className='title'>Create Article</h3>

            {/* Image Selector Component */}
            <div className='checkout-notice'>
              <div className='coupn-box'>
                <div>
                  <div
                    style={{ marginTop: '2rem', marginBottom: '2rem' }}
                    className='edu-footer-widget'
                  >
                    <h4 className='widget-title'>Article Image</h4>
                    <div className='inner'>
                      <p className='description'>
                        Type your search here to select an image ....
                      </p>
                      <div className='input-group footer-subscription-form'>
                        <input
                          className='form-control'
                          onChange={(e) => setQuery(e.target.value)}
                          type='text'
                          placeholder='Search Image...'
                        />
                        <button
                          className='edu-btn btn-secondary btn-medium'
                          type='button'
                          onClick={handleSearch}
                        >
                          Search <i className='icon-4'></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{ marginTop: '2rem', marginBottom: '2rem' }}
                    className='isotope-list gallery-grid-wrap'
                  >
                    <div
                      id='animated-thumbnials'
                      className='edublink-react-gallery-grid'
                    >
                      <div className='row g-5'>
                        {data?.results.map((photo) => (
                          <div
                            key={photo.id}
                            className='col-lg-4 col-md-6'
                            style={{ cursor: 'pointer' }}
                          >
                            <div
                              onClick={() =>
                                setValue('featuredImage', photo.urls.full)
                              }
                              className='edu-popup-image edu-gallery-grid w-100'
                            >
                              <div className='thumbnail'>
                                <Image
                                  className='w-100'
                                  src={photo.urls.small}
                                  alt={
                                    photo.alt_description ??
                                    photo.description ??
                                    ''
                                  }
                                  width={photo.width}
                                  height={photo.height}
                                />
                              </div>
                              <div className='zoom-icon'>
                                <i className='icon-69'></i>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='row g-lg-5'>
              <div className='col-lg-6'>
                <div className='form-group'>
                  <label>Tags*</label>

                  <MultiSelect
                    options={tags?.map((tag: { name: any; id: any }) => ({
                      label: tag.name,
                      value: tag.id,
                    }))}
                    setSelectedOptions={setSelectedTags}
                  />
                </div>
              </div>
            </div>
            <div className='row g-lg-5'>
              <div className='col-lg-6'>
                <div className='form-group'>
                  <label>Title*</label>
                  <input
                    type='text'
                    id='title'
                    {...register('title')}
                    placeholder='title'
                    disabled={createPost.isPending}
                  />
                  <ErrorMessage errorMessage={errors.title?.message} />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='form-group'>
                  <label>Image*</label>
                  <input
                    type='text'
                    id='featuredImage'
                    {...register('featuredImage')}
                    placeholder='image'
                    //disabled
                  />
                  <ErrorMessage errorMessage={errors.featuredImage?.message} />
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='form-group'>
                  <label>Short Description*</label>
                  <input
                    type='text'
                    disabled={createPost.isPending}
                    {...register('description')}
                    id='description'
                    placeholder='short description'
                  />
                  <ErrorMessage errorMessage={errors.description?.message} />
                </div>
              </div>
            </div>

            <div className='form-group mt--50 mb-0'>
              <label>Article*</label>
              <Controller
                name='text'
                control={control}
                disabled={createPost.isPending}
                render={({ field }) => (
                  <div
                    style={{
                      position: 'relative',
                      marginTop: '1rem',
                      height: '100%',
                    }}
                  >
                    <div
                      style={{
                        marginTop: '2.5rem',
                        height: '100%',
                        overflowY: 'auto',
                      }}
                      id='rich-text-editor-container'
                    >
                      <ReactQuill
                        {...field}
                        placeholder='Write Description'
                        onChange={(text: any) => {
                          field.onChange(text);
                        }}
                        theme='snow'
                        style={{ height: '100%', minHeight: '100%' }}
                        id='editor'
                        scrollingContainer='#rich-text-editor-container'
                      />
                      <ErrorMessage errorMessage={errors.text?.message} />
                    </div>
                  </div>
                )}
              />
            </div>

            <div className='form-group mt--50 mb-0'>
              <button type='submit' className='edu-btn order-place'>
                Create <i className='icon-4'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ArticleForm;

export function ErrorMessage({ errorMessage }: { errorMessage?: string }) {
  return (
    <>
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </>
  );
}
