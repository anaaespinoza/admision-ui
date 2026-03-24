import axios, { type AxiosRequestConfig } from 'axios';

import { type MakeCallParams } from "@/packages/utils/types";

import getToken from './getToken';

const ERROR_MAPPING: { [key: number]: { statusCode: number, errorMessage: string } } = {
  400: { statusCode: 400, errorMessage: '¡Revisa que los campos sean correctos!' },
  401: { statusCode: 401, errorMessage: '¡Usuario no autorizado!' },
  404: { statusCode: 404, errorMessage: '¡Registro no encontrado!' },
};

const makeCall = async ({
  method,
  endpoint,
  data,
  query,
}: MakeCallParams) => {
  const tokenData = getToken();

  if (!tokenData || !tokenData.token) {
    return {
      statusCode: 401,
      errorMessage: '¡Usuario no autorizado!',
      data: [],
    };
  }

  const { token } = tokenData;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const domain = process.env.NEXT_PUBLIC_BASE_URL;
  const url = `${domain}${endpoint}${query || ''}`;

  const config: AxiosRequestConfig = {
    method,
    url,
    headers: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      api_key: apiKey!,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    data,
  };

  try {
    const response = await axios(config);
    return {
      statusCode: response.status,
      data: response.data,
    };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const statusCode = error.response?.status || 500;
    const errorMessage = error.response?.data?.message
      || ERROR_MAPPING[statusCode]?.errorMessage || '¡Error Interno del Servidor!';

    return {
      statusCode,
      errorMessage,
      data: [],
    };
  }
};

const getData = ({ endpoint, query }: { endpoint: string, query?: string }) => {
  if (!endpoint) {
    return {
      ...ERROR_MAPPING[400],
      data: [],
    };
  }
  return makeCall({ method: 'GET', endpoint, query });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createRecord = ({ data, endpoint }: { data: any, endpoint: string }) => {
  if (!endpoint) {
    return {
      ...ERROR_MAPPING[400],
      data: [],
    };
  }
  return makeCall({ method: 'POST', endpoint, data });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateRecord = ({ data, endpoint }: { data: any, endpoint: string }) => {
  if (!endpoint) {
    return {
      ...ERROR_MAPPING[400],
      data: [],
    };
  }
  return makeCall({ method: 'PATCH', endpoint, data });
};

const deleteRecord = ({ endpoint }: { endpoint: string }) => {
  if (!endpoint) {
    return {
      ...ERROR_MAPPING[400],
      data: [],
    };
  }
  return makeCall({ method: 'DELETE', endpoint });
};

export {
  getData,
  createRecord,
  updateRecord,
  deleteRecord,
};
