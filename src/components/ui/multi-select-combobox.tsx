import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from '@headlessui/react';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { HiCheck, HiChevronUpDown } from 'react-icons/hi2';

export type Option = { label: string; id: string };

type AutoCompleteProps = {
  options: Option[];
  selectedOptions: Option[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<Option[]>>;
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
      : options.filter((option) =>
          option.label
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );
  }, [options, query]);

  // Define a new callback function to handle the onChange event
  const handleSelectedChange = (value: NoInfer<Option> | null) => {
    // Check if the value is null
    if (value === null) {
      // Update the state with an empty Option or handle it according to your requirements
      setSelected({ label: '', id: '' });
    } else {
      // Update the state with the selected value
      setSelected(value);
    }
  };

  useEffect(() => {
    if (!selected) return;
    setSelectedOptions((pre) =>
      [...pre, selected].filter((val, index, self) => {
        return (
          index ===
          self.findIndex((obj) => JSON.stringify(obj) === JSON.stringify(val))
        );
      })
    );
  }, [selected, setSelectedOptions]);

  return (
    <Combobox value={selected} onChange={handleSelectedChange}>
      <div style={{ position: 'relative', marginTop: '1px' }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            cursor: 'default',
            overflow: 'hidden',
            borderRadius: '0.375rem',
            backgroundColor: 'white',
            textAlign: 'left',
            boxShadow:
              '0 0 0 1px rgba(0,0,0,0.05), 0 1px 2px 0 rgba(0,0,0,0.05)',
          }}
        >
          <ComboboxInput
            style={{
              width: '100%',
              borderRadius: '0.375rem',
              border: '1px solid',
              paddingTop: '1rem',
              paddingLeft: '0.75rem',
              paddingRight: '2.5rem',
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              color: '#4a5568',
              outline: 'none',
              borderColor: '#718096',
            }}
            displayValue={(option: Option) => option.label}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              display: 'flex',
              alignItems: 'center',
              paddingRight: '0.5rem',
            }}
          >
            <HiChevronUpDown
              style={{ height: '1.25rem', width: '1.25rem', color: '#cbd5e0' }}
              aria-hidden='true'
            />
          </ComboboxButton>
        </div>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => {
            setQuery('');
          }}
        >
          <ComboboxOptions
            style={{
              position: 'absolute',
              marginTop: '1px',
              maxHeight: '15rem',
              width: '100%',
              overflow: 'auto',
              borderRadius: '0.375rem',
              backgroundColor: 'white',
              paddingTop: '0.25rem',
              paddingBottom: '0.25rem',
              fontSize: '1rem',
              boxShadow:
                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          >
            {filteredOptions.length === 0 && query !== '' ? (
              <div
                style={{
                  position: 'relative',
                  cursor: 'default',
                  userSelect: 'none',
                  paddingTop: '0.5rem',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  color: '#4a5568',
                }}
              >
                Nothing found.
              </div>
            ) : (
              filteredOptions.map((option) => (
                <ComboboxOption
                  key={option.id}
                  style={{
                    position: 'relative',
                    cursor: 'default',
                    userSelect: 'none',
                    paddingTop: '0.5rem',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    color: option === selected ? 'white' : 'gray',
                  }}
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        style={{
                          display: 'block',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          ...(selected
                            ? { fontWeight: '600' }
                            : { fontWeight: '400' }),
                        }}
                      >
                        {option.label}
                      </span>
                      {selectedOptions.find((tag) => tag?.id === option.id) ? (
                        <span
                          style={{
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: '0.75rem',
                            color: `${active ? 'white' : 'gray'}`,
                          }}
                        >
                          <HiCheck
                            style={{ height: '1.25rem', width: '1.25rem' }}
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
        </Transition>
      </div>
    </Combobox>
  );
};

export default MultiSelectAutoComplete;
