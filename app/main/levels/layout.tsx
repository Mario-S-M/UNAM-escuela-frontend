import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function LevelLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header
        style={{ backgroundColor: "#2c4d71" }}
        className="text-content1 p-4"
      >
        <h1 className="text-2xl font-bold">Niveles de Aprendizaje</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
