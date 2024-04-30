/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
  FaExternalLinkSquareAlt,
  FaImage,
  FaPlus,
  FaVideo,
} from 'react-icons/fa';
import ReactQuill from 'react-quill';
import Select from 'react-select';

import 'react-quill/dist/quill.bubble.css';

import tag_data from '@/data/tag-data';

const Editor = () => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleChange = (selectedOption: any) => {
    setSelectedTags(selectedOption);
  };

  console.log(selectedTags);

  return (
    <div className='article-container'>
      <input
        type='text'
        placeholder='Title'
        className='article-input'
        // onChange={(e) => setTitle(e.target.value)}
      />

      <Select
        isMulti
        name='colors'
        options={tag_data}
        className='basic-multi-select'
        classNamePrefix='select'
        onChange={handleChange}
      />
      {/* <select
        className='article-select'
        // onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value='style'>style</option>
        <option value='fashion'>fashion</option>
        <option value='food'>food</option>
        <option value='culture'>culture</option>
        <option value='travel'>travel</option>
        <option value='coding'>coding</option>
      </select> */}

      <div className='article-editor'>
        <button className='article-button' onClick={() => setOpen(!open)}>
          <FaPlus width={16} height={16} />
        </button>
        {open && (
          <div className='article-add'>
            <input
              type='file'
              id='image'
              // onChange={(e) => setFile(e.target.files[0])}
              style={{ display: 'none' }}
            />
            <button className='article-addButton'>
              <FaImage width={16} height={16} />
            </button>
            <button className='article-addButton'>
              <FaExternalLinkSquareAlt width={16} height={16} />
            </button>
            <button className='article-addButton'>
              <FaVideo width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className='article-textArea'
          theme='bubble'
          value={value}
          onChange={setValue}
          placeholder='Create Article Here...'
        />
      </div>
      <button
        className='article-publish'
        // onClick={handleSubmit}
      >
        Publish
      </button>
    </div>
  );
};

export default Editor;
