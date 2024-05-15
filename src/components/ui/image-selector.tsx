'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { api } from '@/trpc/react';

const ImageSelector = () => {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { data } = api.unsplash.getImages.useQuery(
    { query: searchTerm },
    {
      enabled: !!searchTerm, // Only run the query if searchTerm is not empty
    }
  );

  const { setValue } = useFormContext();

  const handleSearch = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (query.length >= 5) {
      setSearchTerm(query);
    }
  };

  return (
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
                      onClick={() => setValue('featuredImage', photo.urls.full)}
                      className='edu-popup-image edu-gallery-grid w-100'
                    >
                      <div className='thumbnail'>
                        <Image
                          className='w-100'
                          src={photo.urls.small}
                          alt={photo.alt_description ?? photo.description ?? ''}
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
  );
};

export default ImageSelector;
