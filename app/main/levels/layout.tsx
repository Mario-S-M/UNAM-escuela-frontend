import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function LevelLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary-600 text-content1 p-4">
        <h1 className="text-2xl font-bold">Niveles de Aprendizaje</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

      <footer className="bg-primary-100 p-4 text-center">
        <p className="text-content1-foreground">
          &copy; {new Date().getFullYear()} UNAM Escuela
        </p>
      </footer>
    </div>
  );
}
