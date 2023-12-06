import React from "react";
import "./PantallaAviso.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const PantallaAviso = () => {
  const Codigo=localStorage.getItem("Codigo")
  const Path=localStorage.getItem("Path")
  const navigate = useNavigate();
  const {register,handleSubmit,setError,formState: { errors },} = useForm();
  const onSubmit = handleSubmit((codigoVerificacion) => {
    if (codigoVerificacion.codigoVerificacion===Codigo) {
      window.location.href=`/elastografia/confirmar/${Path}`
    } else {
      setError('NoCoincide', {
        type: 'manual',
        message: 'El código no coincide',
      });
    }
  });
  return (
    <div className="cuerpoPantallaAviso">
      <div className="PantallaAvisoComponente">
      <form onSubmit={onSubmit}>
      <header>
        <h1>Introduce el codigo de verificacion</h1>
      </header>
        <h2>enviado a tu whatsapp</h2>
        {errors.codigoVerificacion && <p><span className="error">Codigo de verificacion Requerido</span></p>}
        {errors.NoCoincide && <p><span className="error">{errors.NoCoincide.message}</span></p>}
        <p>
          <input
          autoFocus
          type="text"
            name="codigoVerificacion"
            {...register("codigoVerificacion", { required: true })}
          />
        </p>
        <p>
        <button   type="submit">
          Verificar
        </button>
        </p>
      </form>
    </div>
    </div>
  );
};
