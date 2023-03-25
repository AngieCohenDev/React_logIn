import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiMailCheckLine,
  RiKey2Line,
  RiEyeFill,
  RiEyeOffFill,
} from "react-icons/ri";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([email, ].includes("")) {
      toast.error("El correo es obligatorio 😑", {
        theme: "dark",
      });
      return;
    }
    toast.success("Se ha enviado la solicitud al correo 🤗", {
      theme:"dark",
    })
  };

  return (
    <div className="bg-white p-8 w-[500px] md:w-96 rounded-lg  border border-blue-200">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">
          Recuperar Contraseña
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <div className="relative">
          <RiMailCheckLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            className="w-full border border-blue-300 outline-none py-2 px-8 rounded-lg"
            placeholder="Correo Electrónico "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
      </div>
        <div>
          <button className="mt-6 bg-sky-400 text-white w-full py-2 px-6 rounded-r-lg hover:bg-sky-500 transition-colors">
            Solicitar cambio de Contraseña
          </button>
        </div>
      </form>
      <div className="flex items-center justify-between">
      <div >
        ¿Eres parte de la élite? <Link to="/" className="text-sky-600 font-medium hover:underline transition-all">¡Inicia Sesión!</Link>
      </div>
      <div className="text-right">
        ¿Quieres ser parte de la élite? <Link to="/registrar" className="text-sky-600 font-medium hover:underline transition-all">¡Únete!</Link>
      </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
