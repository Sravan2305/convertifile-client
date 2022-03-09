/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';

import { Spin, notification } from 'antd';

import { Attachment } from '@/SVG/Attachment';
import { UploadSVG } from '@/SVG/UploadSVG';
import { niceBytes } from '@/utils/bytesToSize';
import { MULTIPLE_FILE_INPUT, SINGLE_FILE_INPUT } from '@/utils/endpoints';
import { formats } from '@/utils/formats';
import { throttle } from '@/utils/throttle';

export const FileSection = ({
  format,
}: {
  format: { to: string; from: string };
}) => {
  let accept = `.${`${(format.from as string)?.toLowerCase()}`}`;
  if (accept === '.multiple-images') accept = '.jpg, .jpeg, .png';
  const maxFileCount = formats[format.from as keyof typeof formats]?.count ?? 1;
  const toFormat =
    maxFileCount > 1 ? 'pdf' : (format.to as string).toLowerCase();

  const [magicInProgress, setMagicInProgress] = useState(false);

  const [filesData, setFilesData] = useState<File[]>();

  const storefiles = () => {
    const file = document.querySelector('#file-upload') as HTMLInputElement;
    const { files } = file;
    if (files![0])
      if (maxFileCount > 1 && filesData?.length)
        setFilesData([...filesData, files![0]]);
      else setFilesData([files![0]]);
  };
  React.useEffect(() => {
    setFilesData(undefined);
  }, [format.from]);

  const handleClick = throttle(() => {
    if (!format.to || !format.from || !filesData || !filesData.length) return;
    if (magicInProgress) return;
    setMagicInProgress(true);
    const formData: any = new FormData();

    // const file = document.querySelector('#file-upload') as HTMLInputElement;
    filesData?.forEach((singleFile) => formData.append('file', singleFile));
    fetch(
      `${
        maxFileCount > 1 ? MULTIPLE_FILE_INPUT : SINGLE_FILE_INPUT
      }${toFormat}`,
      {
        method: 'POST',
        body: formData,
        headers: {
          //   'Content-Type': 'multipart/form-data',
        },
      },
    )
      .then((response) => {
        if (response.status !== 200) throw new Error(response.statusText);
        const fileName =
          response.headers.get('content-disposition')?.split('filename=')[1] ??
          '';

        response.arrayBuffer().then(function fileDownload(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', fileName);
          document.body.appendChild(link);
          link.click();
          setMagicInProgress(false);
        });
      })
      .catch(() => {
        notification.open({
          message: 'Oops ! Conversion Failed',
          description: `Almost 99.9% of user requests succeed. However, the following file conversion from ${format.from} to ${format.to} failed. Please try again.`,
          className: 'bg-white text-red font-bold',
          duration: 20,
        });
        setMagicInProgress(false);
      });
  }, 3000);

  return (
    <main className="flex p-10 m-auto mt-8 w-11/12 bg-white rounded-xl s:flex-col">
      <div className="flex-1 text-blue border-4 border-blue border-dashed s:w-full s:h-24 xl:h-64 center-block">
        <label
          htmlFor="file-upload"
          className="flex justify-center items-center py-2 w-full h-full text-lg font-bold bg-white shadow-sm s:justify-center s:w-full s:text-sm"
        >
          <UploadSVG /> Upload (Max: {maxFileCount} files)
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept={accept}
          multiple={maxFileCount > 1}
          onChange={storefiles}
        />
      </div>
      <div className="flex-1 px-8 h-64 s:px-0 s:mt-10">
        {!!filesData?.length && <h4>Following file(s) are uploaded:</h4>}
        {filesData?.map(({ name, size }) => {
          return (
            <div className="flex my-2" key={name + size}>
              <Attachment />
              <p className="text-red">
                {name}-{niceBytes(size)}
              </p>
            </div>
          );
        })}
        <button
          onClick={handleClick}
          className={`py-[10px] px-8 text-lg font-bold w-full   bg-blue  rounded-xl ${
            magicInProgress
              ? 'opacity-50 bg-white cursor-not-allowed text-blue '
              : 'hover:bg-teal  hover:text-white'
          } ${
            (!format.to || !format.from || !filesData || !filesData.length) &&
            'bg-gray-300 text-gray-500 hover:bg-gray-300 hover:text-gray-700 cursor-not-allowed '
          }`}
        >
          {magicInProgress ? (
            <>
              <Spin style={{ color: 'red' }} />
              <span className="ml-2">magic in progress</span>
            </>
          ) : (
            'Do the Magic'
          )}
        </button>
        <p className="mt-1 text-xs text-center text-red">
          {' '}
          {!format.from
            ? "Please select the 'from' format from above"
            : !format.to
            ? "Please select the 'to' format from above"
            : filesData?.length === 0 || !filesData
            ? 'Upload atleast a single file to get started'
            : ''}{' '}
        </p>
      </div>
    </main>
  );
};
