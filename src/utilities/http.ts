import axios, { AxiosRequestConfig, AxiosError } from 'axios';

export const request = (requestConfig: AxiosRequestConfig) => axios(requestConfig);
export type IRequestError = AxiosError;

export const getErrorMessageFromResponse = (response: any) => response?.data?.error?.message;

export const downloadFile = (data: any, filename: string, type: string) => {
  const file = new Blob([data], { type });
  const nav = (window.navigator as any);
  if (nav.msSaveOrOpenBlob) {
    nav.msSaveOrOpenBlob(file, filename);
  } else {
    const a = document.createElement('a');
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
};
