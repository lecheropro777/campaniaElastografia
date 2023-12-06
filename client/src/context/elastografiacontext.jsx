import React, { useEffect } from "react";
import { createContext, Provider, Context } from "react";
import { enviarWhatssappConfirmacion } from "../api/Registrousuarios";

export const ContextElastografia = createContext();

export function ElastografiaProvider({ children }) {
  // origen 1=whatsapp, origen 2=facebook, origen 3=instagram, origen 4=periodico sol de parral, origen 5=correo electronico

  const RegistrarVisitaElastografia = async () => {
    const visitado = localStorage.getItem("VisitaElastogrtafia");
    if (!visitado) { const visita = localStorage.setItem("VisitaElastogrtafia", "visitado");}
    else {return;}
  };
  const RegistrarVecesVisitado =  () => {
    const visitado = parseInt(localStorage.getItem("VecesVisitado")) || 0;
    const cantidad = visitado + 1;
    console.log(cantidad);
    localStorage.setItem("VecesVisitado", cantidad);
  };
  const RegistrarOrigen = (origen) => {};
  const EnviarWhatsapp = async (whatsapp) => {
    const Enviar = await enviarWhatssappConfirmacion(whatsapp);
    if (Enviar) {
      let Path = Enviar.data.Path;
      let CodigoVerificacion = Enviar.data.CodigoVerificacion;
      colocarCodigo(CodigoVerificacion);
      colocarPath(Path);
      colocarTelefono(whatsapp);
      console.log("hecho");
    }
    return;
  };
  const colocarCodigo = (CodigoVerificacion) => {localStorage.setItem("Codigo", CodigoVerificacion);};
  const colocarPath = (Path) => {localStorage.setItem("Path", Path);};
  const colocarTelefono = (whatsapp) => {localStorage.setItem("telefono", whatsapp.Whatsapp);};
  useEffect(() => {
    RegistrarVisitaElastografia();
  }, []);

  return (
    <ContextElastografia.Provider
      value={{
        RegistrarVisitaElastografia,
        EnviarWhatsapp,
        RegistrarOrigen,
        RegistrarVecesVisitado,
      }}
    >
      {children}
    </ContextElastografia.Provider>
  );
}
