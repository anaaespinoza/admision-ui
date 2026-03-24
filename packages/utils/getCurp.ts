import axios from "axios";

import { ENTIDADES, type CurpData, type CurpError } from "@/packages/utils/types";

export const getCurp = async (curp: string): Promise<CurpData> => {
    const host = process.env.NEXT_PUBLIC_CURP_PATH;
    const key = process.env.NEXT_PUBLIC_CURP_KEY;

    const res = await axios.get(`https://curp-mexico1.p.rapidapi.com/porCurp/${curp}`, {
        headers: {
            "x-rapidapi-host": host ?? "",
            "x-rapidapi-key": key ?? "",
        },
    });

    if (res.data.estatus !== "ok") {
        throw { code: 404, msn: "La CURP no se encuentra registrada en RENAPO" } satisfies CurpError;
    }

    const { Nombre, ApellidoPaterno, ApellidoMaterno, FechaNacimiento, NumEntidadReg, Sexo } = res.data.datos;
    const entidad = ("00" + NumEntidadReg).slice(-2);

    return {
        name: Nombre,
        firstName: ApellidoPaterno,
        secondName: ApellidoMaterno,
        birthDate: FechaNacimiento,
        birthState: ENTIDADES[entidad] ?? entidad,
        sex: Sexo,
    };
};