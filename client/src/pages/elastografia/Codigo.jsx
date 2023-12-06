import React from "react";
import "./Codigo.css";
export const Confirmar = () => {
  const codigo = localStorage.getItem("Codigo");
  return (
    <div className="ConfirmarCodigoComponente">
      <header></header>
      <div>
        <div>
          <h3>
            Recuerde a la hora de agendar su cita ya sea por telefono o de forma presencial,
          </h3>
          <h3>
            ademas de canjear su codigo de descuento, debe traer orden medica, CURP, correo electronico.
          </h3>
        </div>
        <div>
          <p>
            <label>Codigo de descuento: </label>
          </p>
          <p>{codigo}</p>
        </div>
        <div>
          <p></p>
          <h1>En lugar de traer papeleria</h1>
          <h1>Registrar mis datos de una vez.</h1>
          <p>
            <button>Llenar datos</button>
          </p>
        </div>
      </div>
    </div>
  );
};
