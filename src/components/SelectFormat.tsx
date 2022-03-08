import React, { useEffect, useState } from 'react';

import { formats } from '@/utils/formats';

export const SelectFormat = ({
  setFormatSelected,
}: {
  setFormatSelected: React.Dispatch<
    React.SetStateAction<{
      to: string;
      from: string;
    }>
  >;
}) => {
  const [format, setFormat] = useState({ to: '', from: '' });

  useEffect(() => {
    setFormatSelected(format);
  }, [format, setFormatSelected]);
  return (
    <div className="w-full ">
      <h4 className="text-5xl text-center text-white s:text-3xl">
        Please Select the file formats first!
      </h4>
      <div className="flex justify-evenly items-center mt-6 w-full ">
        <div className="flex-1 w-full">
          <section
            id="convert"
            className="py-3 px-6 m-auto mt-6 w-3/4 h-auto min-h-fit text-black bg-white rounded-2xl shadow-lg s:flex s:flex-col s:items-center s:pl-3 s:w-full"
          >
            <p className="mb-4 text-3xl text-center s:text-xl">From</p>
            {Object.keys(formats).map((ext) => (
              <button
                key={ext}
                className={`format ${format.from === ext && 'format-active'}`}
                onClick={() => setFormat({ to: '', from: ext })}
              >
                {ext}
              </button>
            ))}
          </section>
        </div>
        <div className="mt-10 w-96 h-2 bg-white rounded-md"></div>
        <div className="flex-1 w-full">
          <section
            className="py-3 px-6 m-auto mt-6 w-3/4 h-auto min-h-fit text-black bg-white rounded-2xl shadow-lg s:flex s:flex-col s:items-center s:pl-3 s:w-full to-format"
            key={format.from}
          >
            <p className="mb-4 text-3xl text-center s:text-xl">To</p>
            {format.from ? (
              <div>
                {formats[format.from as keyof typeof formats]?.allowed.map(
                  (val) => {
                    if (val === 'MULTIPLE-IMAGES') return null;
                    return (
                      <button
                        key={val}
                        className={`format ${
                          format.to === val && 'format-active'
                        }`}
                        onClick={() => setFormat({ ...format, to: val })}
                      >
                        {val}
                      </button>
                    );
                  },
                )}
              </div>
            ) : (
              //   Object.keys(formats).map((ext) => (
              //     <button
              //       key={ext}
              //       className={`format ${format.from === ext && 'format-active'}`}
              //       onClick={() => setFormat({ to: '', from: ext })}
              //     >
              //       {ext}
              //     </button>
              //   ))
              false
            )}
          </section>
        </div>
      </div>
    </div>
  );
};
