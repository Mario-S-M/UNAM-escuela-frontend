"use client";
import GlobalInput from "@/components/global/globalInput";
import GlobalToast from "@/components/global/globalToast";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Cuadro azul a la izquierda (oculto en móviles) */}
      <div className="hidden md:flex md:w-1/2 bg-primary-500 items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-3xl font-bold">Bienvenido</h2>
          <p className="mt-2">Ingresa tus credenciales para acceder a tu cuenta.</p>
        </div>
      </div>

      {/* Formulario de inicio de sesión (ocupa toda la pantalla en móviles) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="p-8 rounded-md shadow-md w-full max-w-md border border-gray-500">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold mb-2">Iniciar Sesión</h1>
            <p className="text-gray-600 text-sm">
              Accede a tu cuenta de usuario fácilmente.
            </p>
          </div>

          <form>
            <div className="mb-4">
              <GlobalInput
                type="email"
                label="Correo"
                isRequired={true}
                placeholder="correo@correo.com"
              />
            </div>

            <div className="mb-6">
              <GlobalInput
                type="password"
                label="Contraseña"
                placeholder="Juanito123"
                isRequired={true}
              />
            </div>

            <GlobalToast
              text="Iniciar Sesión"
              toastTitle="Inicio de Sesión Exitoso"
              toastDescription="Bienvenido a tu cuenta de usuario."
              toastColor="success"
            />
          </form>

          <div className="mt-6 text-center text-sm grid space-y-4">
            <Link href="/auth/forgotPassword">
              <span className="text-primary-500">¿Olvidaste tu contraseña?</span>
            </Link>
            <Link href="/auth/register">
              ¿No tienes una cuenta?{" "}
              <span className="text-primary-500">Regístrate</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;