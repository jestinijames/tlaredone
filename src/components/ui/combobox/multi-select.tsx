/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
//import Select from 'react-select';
//const AsyncSelect = dynamic(() => import('react-select/async'), { ssr: false });
import Select from 'react-select';

type Option = { label: string; id: string };

// type ReactSelectOption = { label: string; value: string };

type AutoCompleteProps = {
  options: Option[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<Option[]>>;
};

export default function MultiSelect({
  options,
  setSelectedOptions,
}: AutoCompleteProps) {
  function handleChange(selectedTags: any) {
    const newArray = selectedTags.map((item: { label: any; value: any }) => ({
      label: item.label,
      id: item.value, // Assuming you want to use the 'value' field as the id
    }));
    setSelectedOptions(newArray);
  }

  return <Select isMulti options={options} onChange={handleChange} />;
}
