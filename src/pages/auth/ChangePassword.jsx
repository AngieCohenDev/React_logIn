import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  RiMailCheckLine,
  RiKey2Line,
  RiEyeFill,
  RiEyeOffFill,
} from "react-icons/ri";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirPassword, setConfirPassword] = useState("");

  const {token} = useParams();
 
  if(token !== "123"){
    Navigate("/");
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([ password, confirPassword].includes("")) {
      toast.error("Todos los campos son obligatorios 😑", {
        theme: "dark",
      });
      return;
    }
    if (password.length < 6) {
      toast.error("El Password tiene que tener al menos 6 caracteres 😟", {
        theme: "dark",
      });
      return;
    }
    if (password !== confirPassword) {
      toast.error("Los password no son iguales 🤨", {
        theme: "dark",
      });
      return;
    }
  };

  return (
    <div className="bg-white p-8 w-full md:w-96 rounded-lg  border border-blue-200">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">
         Cambiar Contraseña
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
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
            <RiEyeFill
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          ) : (
            <RiEyeOffFill
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          )}
        </div>
        <div className="relative">
          <RiKey2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            className="w-full border border-blue-300 outline-none py-2 px-8 rounded-lg"
            placeholder="Confirmar  Contraseña "
            value={confirPassword}
            onChange={(e) => setConfirPassword(e.target.value)}
          />
          {showPassword ? (
            <RiEyeFill
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          ) : (
            <RiEyeOffFill
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          )}
        </div>
       
        <div>
          <button className="mt-6 bg-sky-400 text-white w-full py-2 px-6 rounded-r-lg hover:bg-sky-500 transition-colors">
           Restablecer Contraseña
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default ChangePassword;
