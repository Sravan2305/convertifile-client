// const DOMAIN = process.env.DOMAIN ?? `http://127.0.0.1:8000`;

const DOMAIN = `https://039e-2405-201-c022-504b-840a-9285-9a7-beb8.ngrok.io`;

export const API_ENDPOINT = `${DOMAIN}/app/v1/convert`;

export const SINGLE_FILE_INPUT = `${API_ENDPOINT}/convert-single-file?to_format=`;

export const MULTIPLE_FILE_INPUT = `${API_ENDPOINT}/multiple-files-convert?to_format=`;
