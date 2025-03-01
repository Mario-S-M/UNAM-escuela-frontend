"use client"
import GlobalButton from "@/components/global/globalButton";
import GlobalInput from "@/components/global/globalInput";
import { HeroUIProvider } from "@heroui/react";

const HomePage = () => {
  return (
    <>
      <HeroUIProvider>
        <div className="text-6xl text-cyan-600">HomePage</div>
        <GlobalButton />
        <GlobalInput />
      </HeroUIProvider>
    </>
  );
};

export default HomePage;
