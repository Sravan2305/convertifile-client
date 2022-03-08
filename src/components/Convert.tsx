import React, { useState } from 'react';

import { FileSection } from './FileSection';
import { SelectFormat } from './SelectFormat';

export const Convert = () => {
  const [formatSelected, setFormatSelected] = useState({ to: '', from: '' });
  return (
    <section className="flex flex-col py-10 mt-10 w-full font-bold text-white bg-blue s:px-4">
      <SelectFormat setFormatSelected={setFormatSelected} />
      <FileSection format={formatSelected} />
    </section>
  );
};
