"use client";
import GlobalButton from "@/components/global/globalButton";
import GlobalInput from "@/components/global/globalInput";
import GlobalToast from "@/components/global/globalToast";
import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="hidden md:flex md:w-1/2 bg-primary-500 items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-3xl font-bold">Recuperar Contraseña</h2>
          <p className="mt-2">
            Ingresa tu correo electrónico para restablecer tu contraseña.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="p-8 rounded-md shadow-md w-full max-w-md border border-gray-500">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold mb-2">
              Recuperar Contraseña
            </h1>
            <p className="text-gray-600 text-sm">
              Ingresa tu correo electrónico para restablecer tu contraseña.
            </p>
          </div>

          <form>
            <div className="mb-6">
              <GlobalInput
                type="email"
                placeholder="Correo"
                isRequired={true}
              />
            </div>

            <div className="flex justify-center">
              <GlobalToast
                text="Enviar Correo"
                toastTitle="Correo Enviado"
                toastDescription="Se ha enviado un correo con las instrucciones para restablecer tu contraseña."
                toastColor="success"
              />
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <Link href="/auth/login">
              ¿Recordaste tu contraseña?{" "}
              <span className="text-primary-500">Inicia sesión</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
