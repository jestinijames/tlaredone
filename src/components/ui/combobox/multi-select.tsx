/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
//import Select from 'react-select';
//const AsyncSelect = dynamic(() => import('react-select/async'), { ssr: false });
import Select from 'react-select';

type Option = { label: string; id: string };

// type ReactSelectOption = { label: string; value: string };

type AutoCompleteProps = {
  options: any;
  setSelectedOptions: React.Dispatch<React.SetStateAction<Option[]>>;
  defaultValue?: any;
};

export default function MultiSelect({
  options,
  setSelectedOptions,
  defaultValue,
}: AutoCompleteProps) {
  function handleChange(selectedTags: any) {
    const newArray = selectedTags.map((item: { label: any; value: any }) => ({
      label: item.label,
      id: item.value, // Assuming you want to use the 'value' field as the id
    }));
    setSelectedOptions(newArray);
  }

  if (defaultValue) {
    return (
      <Select
        isMulti
        value={defaultValue}
        options={options}
        onChange={handleChange}
      />
    );
  }

  return <Select isMulti options={options} onChange={handleChange} />;
}
