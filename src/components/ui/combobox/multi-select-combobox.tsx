/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { FaCheck } from 'react-icons/fa6';

import './combobox.css';

type Option = { label: string; id: string };

type AutoCompleteProps = {
  options: any;
  selectedOptions: any;
  setSelectedOptions: any;
};

const MultiSelectAutoComplete = ({
  options,
  selectedOptions,
  setSelectedOptions,
}: AutoCompleteProps) => {
  const [selected, setSelected] = useState(options[0]);
  const [query, setQuery] = useState('');

  const filteredOptions = useMemo(() => {
    return query === ''
      ? options
      : options.filter((option: { label: string }) =>
          option.label
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );
  }, [options, query]);

  useEffect(() => {
    if (!selected) return;
    setSelectedOptions((pre: any) =>
      [...pre, selected].filter((val, index, self) => {
        return (
          index ===
          self.findIndex((obj) => JSON.stringify(obj) === JSON.stringify(val))
        );
      })
    );
  }, [selected, setSelectedOptions]);

  return (
    <div className='row g-lg-5'>
      <div className='col-lg-6'>
        <div className='form-group'>
          <Combobox value={selected} onChange={setSelected}>
            {({ open }) => (
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    cursor: 'default',
                    overflow: 'hidden',
                    borderRadius: '0.5rem',
                    backgroundColor: 'white',
                    textAlign: 'left',
                  }}
                >
                  <ComboboxInput
                    style={{
                      width: '100%',
                      borderRadius: '0.5rem',
                      paddingLeft: '0.75rem',
                      paddingRight: '2.5rem',
                      lineHeight: '1.25rem',
                      color: '#4a5568',
                      outline: 'none',
                    }}
                    displayValue={(option: Option) => option?.label}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>

                <AnimatePresence>
                  {open && (
                    <ComboboxOptions
                      static
                      as={motion.div}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      anchor='bottom'
                      className='origin-top empty:hidden'
                      onAnimationComplete={() => setQuery('')}
                    >
                      {filteredOptions.length === 0 && query !== '' ? (
                        <div
                          style={{
                            position: 'relative',
                            cursor: 'default',
                            userSelect: 'none',
                            paddingTop: '0.5rem',
                            paddingBottom: '0.5rem',
                            paddingLeft: '1rem',
                            paddingRight: '1rem',
                            color: '#4a5568',
                          }}
                        >
                          Nothing found.
                        </div>
                      ) : (
                        filteredOptions.map((option: any) => (
                          <ComboboxOption
                            key={option.id}
                            style={{
                              position: 'relative',
                              cursor: 'default',
                              userSelect: 'none',
                              paddingTop: '0.5rem',
                              paddingBottom: '0.5rem',
                              paddingLeft: '2.5rem',
                              paddingRight: '1.25rem',
                            }}
                            className={({ active }) =>
                              ` ${active ? 'option-active' : 'option-inactive'}`
                            }
                            value={option}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  style={{
                                    display: 'block',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                  }}
                                  className={` ${
                                    selected ? 'font-medium' : 'font-normal'
                                  }`}
                                >
                                  {option.label}
                                </span>
                                {selectedOptions.find(
                                  (tag: any) => tag?.id === option.id
                                ) ? (
                                  <span
                                    style={{
                                      position: 'absolute',
                                      top: 0,
                                      left: 0,
                                      display: 'flex',
                                      alignItems: 'center',
                                      paddingLeft: '0.75rem',
                                    }}
                                    className={` ${
                                      active ? 'text-white' : 'text-gray-600'
                                    }`}
                                  >
                                    <FaCheck
                                      style={{
                                        height: '1.25rem',
                                        width: '1.25rem',
                                      }}
                                      aria-hidden='true'
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </ComboboxOption>
                        ))
                      )}
                    </ComboboxOptions>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Combobox>
        </div>
      </div>
    </div>
  );
};

export default MultiSelectAutoComplete;
