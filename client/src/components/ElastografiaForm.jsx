import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./ElastografiaForm.css";
import { ContextElastografia } from "../context/elastografiacontext";
import { useParams } from "react-router-dom";

export const ElastografiaForm = () => {
  const {EnviarWhatsapp} =useContext(ContextElastografia)
  const { register, handleSubmit, formState:{errors},reset } = useForm();
  const onSubmit = handleSubmit((numeroWhatsapp) => {
    EnviarWhatsapp(numeroWhatsapp)
    reset()
    setTimeout(()=>{
      window.location.href="/anuncio"
    },1000)
  });
  return (
    <>
      <div className="ElastografiaFormComponente">
      <form className="formulario" onSubmit={onSubmit}>
        <p>
        <label htmlFor="Whatsapp">Numero de Whatsapp</label>
        </p>
        <p>
          <input
          
          
          id="Whatsapp"
            className="ElastografiaInput"
            type="text"
            name="Whatsapp"
            {...register("Whatsapp", { required: true, minLength:10, maxLength:10 })}
          />
          
         
        </p>
        {errors.Whatsapp && <span>Numero Requerido</span>}
        <p>
        <button type="submit">Verificar</button>
        </p>
      </form>
      </div>
    </>
  );
};
