import React, { useState } from "react";
import {
  RiMailCheckLine,
  RiKey2Line,
  RiEyeFill,
  RiEyeOffFill,
} from "react-icons/ri";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () =>{
    setShowPassword(!showPassword);
  }

  return (
    <div className="bg-white p-8 w-full md:w-96 rounded-lg  border border-blue-200">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">
          Iniciar Sesión{" "}
        </h1>
      </div>
      <form className="flex flex-col gap-4">
        <div className="relative">
          <RiMailCheckLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            className="w-full border border-blue-300 outline-none py-2 px-8 rounded-lg"
            placeholder="Correo Electrónico "
          />
        </div>
        <div className="relative">
          <RiKey2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            className="w-full border border-blue-300 outline-none py-2 px-8 rounded-lg"
            placeholder="Ingresa tu Contraseña "
          />
          {showPassword ? (
            <RiEyeFill onClick={handleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer" />
          ) : (
            <RiEyeOffFill onClick={handleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer" />
          )}
        </div>
        <div>
          <button className="mt-6 bg-sky-400 text-white w-full py-2 px-6 rounded-r-lg hover:bg-sky-500 transition-colors">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
