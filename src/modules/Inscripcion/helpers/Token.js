import axios from "axios"

export const obtenerTokenFachada = async (usuario) => {
    return await obtenerToken(usuario);
}

const obtenerToken = async (usuario) => {
    const data = axios.post(`http://localhost:8082/API/V1.0/Autorizacion/tokens/obtener`,usuario).then(r => r.data);
    return data;
}