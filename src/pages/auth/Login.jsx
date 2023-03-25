import React, { useState } from "react";
import {
  RiMailCheckLine,
  RiKey2Line,
  RiEyeFill,
  RiEyeOffFill,
} from "react-icons/ri";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = () =>{
    setShowPassword(!showPassword);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if([email, password].includes("")){
      toast.error("Todos los campos son obligatorios 😑",{
        theme:"dark",
      });
      return;
    }
    if(password.length < 6){
      toast.error("El Password tiene que tener al menos 6 caracteres 😟",{
        theme:"dark",
      });
      return;
    }
    
  }

  return (
    <div className="bg-white p-8 w-full md:w-96 rounded-lg  border border-blue-200">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">
          Iniciar Sesión{" "}
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
        <div className="relative">
          <RiKey2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            className="w-full border border-blue-300 outline-none py-2 px-8 rounded-lg"
            placeholder="Ingresa tu Contraseña "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
