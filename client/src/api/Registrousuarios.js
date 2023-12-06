import axios from "axios";

const URI="http://localhost:4000"

export const enviarWhatssappConfirmacion = async(WhatsappConfirmacion)=>await axios.post(`${URI}/EnviarWhatsapp/Elastografia`, WhatsappConfirmacion )

export const registrarUsuarioCampanaElastografia=async(DatosUsuario)=> await axios.post(`${URI}`,DatosUsuario)  

export const guardarCodigoDescuentoUsuario = async (CodigoDescuento) => await axios.post(`${URI}`, CodigoDescuento)