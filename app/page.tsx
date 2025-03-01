"use client";

import GlobalInput from "@/components/global/globalInput";
import GlobalToast from "@/components/global/globalToast";

const HomePage = () => {
  return (
    <>
      <div className="text-6xl text-cyan-600">HomePage</div>
      <GlobalInput
        label="Label del Input"
        isInvalid={true}
        errorMessage="Mensaje de Error"
      />
      <GlobalToast
        text="Texto del Boton"
        toastTitle="Texto del title del Toast"
        toastDescription="Descripción del Toast"
        toastColor="secondary"
      />
    </>
  );
};

export default HomePage;
