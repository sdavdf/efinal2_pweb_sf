import axios from "axios";

export const ingresarEstudianteFachada=async(usuario, token)=>{
    return await ingresarEstudiante(usuario, token);
}

const ingresarEstudiante=async(usuario, token)=>{
    const value = "Bearer " + token;
    console.log("value token", value)
    const headers = {
        "Authorization": value,
    }
    const data =await axios.post("http://localhost:8082/API/V1.0/Inscripcion/estudiantes",usuario,{headers:headers}).then(r =>r.data);

    return data;
}