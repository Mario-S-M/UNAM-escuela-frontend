"use client";
import GlobalInput from "@/components/global/globalInput";
import GlobalToast from "@/components/global/globalToast";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Cuadro azul a la izquierda (oculto en móviles) */}
      <div className="hidden md:flex md:w-1/2 bg-primary-500 items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-3xl font-bold">Bienvenido</h2>
          <p className="mt-2">
            Crea una cuenta para acceder a todas las funcionalidades.
          </p>
        </div>
      </div>

      {/* Formulario de registro (ocupa toda la pantalla en móviles) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="p-8 rounded-md shadow-md w-full max-w-md border border-gray-500">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold mb-2">Crear Cuenta</h1>
            <p className="text-gray-600 text-sm">
              Regístrate para acceder a todas las funcionalidades.
            </p>
          </div>

          <form>
            <div className="mb-4">
              <GlobalInput type="text" placeholder="Nombre" isRequired={true} />
            </div>

            <div className="mb-4">
              <GlobalInput
                type="text"
                placeholder="Apellido"
                isRequired={true}
              />
            </div>

            <div className="mb-4">
              <GlobalInput
                type="email"
                placeholder="Correo"
                isRequired={true}
              />
            </div>

            <div className="mb-4">
              <GlobalInput
                type="password"
                placeholder="Contraseña"
                isRequired={true}
              />
            </div>

            <div className="mb-6">
              <GlobalInput
                type="password"
                placeholder="Confirmar Contraseña"
                isRequired={true}
              />
            </div>

            <div className="flex justify-center">
              <GlobalToast
                text="Crear Cuenta"
                toastTitle="Cuenta Creada Exitosamente"
                toastDescription="Tu cuenta ha sido creada exitosamente."
                toastColor="success"
              />
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <Link href="/auth/login">
              ¿Ya tienes una cuenta?{" "}
              <span className="text-primary-500">Inicia sesión</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
