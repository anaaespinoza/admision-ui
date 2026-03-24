import { type TokenPayload, type ParsedToken } from "@/packages/utils/types";

export function parseJwt(token: string) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`)
        .join(''),
    );

    return JSON.parse(jsonPayload) as TokenPayload;
  } catch (error) {
    throw new Error(`Invalid token: ${error}`);
  }
}

export default function getToken(): ParsedToken | null {
  const jwt = localStorage.getItem('authToken');
  if (!jwt) {
    return null;
  }

  const parsedJwt = parseJwt(jwt);
  if (!parsedJwt) {
    return null;
  }

  const {
    exp,
    idCredencial,
    curp,
    correo,
    celular,
    aplicaciones,
    grupos,
    nombre,
  } = parsedJwt;

  if (exp * 1000 < Date.now()) {
    localStorage.removeItem('authToken');
    return null;
  }

  const data: ParsedToken = {
    idCredencial,
    curp,
    correo,
    celular,
    aplicaciones,
    grupos,
    nombre,
    token: jwt,
  };

  return data;
}
