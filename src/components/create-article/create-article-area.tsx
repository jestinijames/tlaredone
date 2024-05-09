'use client';

// import dynamic from "next/dynamic";
// import { FaTimes } from "react-icons/fa";
// import { z } from "zod";
// import React, { useContext, useEffect, useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// const ReactQuill = dynamic(() => import("react-quill"), {
//   ssr: false,
// });
// import "react-quill/dist/quill.snow.css";
// import { toast } from 'react-toastify';
// import { createTRPCRouter } from "@/server/api/trpc";
// import MultiSelectAutoComplete, {type Option} from "@/components/ui/multi-select-combobox";

// interface IFormInputs {
//   title: string;
//   description: string;
//   text: string;
// }

// export const postSchema = z.object({
//   title: z.string().min(20).max(40),
//   description: z.string().min(95).max(200),
//   text: z.string().min(80),
// });

export const ErrorMessage = ({ errorMessage }: { errorMessage?: string }) => {
  return (
    <div
      style={{
        width: '100%',
        wordBreak: 'break-word',
        fontSize: '0.875rem',
        color: '#DC2626',
      }}
    >
      <p>{errorMessage}</p>
    </div>
  );
};

const countries = [
  'Select Option',
  'Australia',
  'England',
  'New Zealand',
  'Switzerland',
  'United Kindom (UK)',
  'United States (USA)',
];

const CreateArticleArea = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  //   control,
  //   getValues,
  // } = useForm<IFormInputs>({
  //   resolver: zodResolver(postSchema),
  // });

  // const [selectedTags, setSelectedTags] = useState<Option[]>([]);
  return (
    <section className='checkout-page-area section-gap-equal'>
      <div className='container'>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='row row--25'>
            <div>
              <div className='checkout-billing'>
                <h3 className='title'>Billing Details</h3>
                <div className='row g-lg-5'>
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label>First Name*</label>
                      <input type='text' id='first-name' />
                    </div>
                  </div>

                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label>Last Name*</label>
                      <input type='text' id='last-name' />
                    </div>
                  </div>
                </div>

                <div className='form-group'>
                  <label>Company Name</label>
                  <input type='text' id='company-name' />
                </div>

                <div className='form-group'>
                  <label>Email Address*</label>
                  <input type='email' id='email' />
                </div>

                <div className='row g-lg-5'>
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label>Phone*</label>
                      <input type='tel' id='phone' />
                    </div>
                  </div>

                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label>Country*</label>
                      {/* <MultiSelectAutoComplete
                options={tags.map((tag) => ({
                  label: tag.name,
                  id: tag.id,
                }))}
                selectedOptions={selectedTags}
                setSelectedOptions={setSelectedTags}
              /> */}
                    </div>
                  </div>
                </div>

                <div className='form-group'>
                  <label>Address*</label>
                  <input type='text' id='address1' />
                  <input type='text' id='address2' />
                </div>

                <div className='form-group'>
                  <label>Town/ City*</label>
                  <input type='text' id='town' />
                </div>

                <div className='row g-lg-5'>
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label>State*</label>
                      <select id='state'>
                        {countries.map((country, i) => (
                          <option key={i}>{country}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label>Zip Code*</label>
                      <input type='tel' id='phone' />
                    </div>
                  </div>
                </div>

                <div className='form-group'>
                  <div className='edu-form-check'>
                    <input type='checkbox' id='crt-accnt' className='w-25' />
                    <label htmlFor='crt-accnt'>Create an Accoutn?</label>
                  </div>
                </div>

                <div className='form-group mt--50 mb-0'>
                  <label>Order Notes</label>
                  <textarea
                    id='notes'
                    rows={4}
                    placeholder='Notes about your order, e.g. speacial notes for delivery.'
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateArticleArea;
