"use client";
import { useState, useEffect } from "react";
import { Tabs, Tab } from "@heroui/react";
import { Contrast, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ToogleTheme() {
  const [selected, setSelected] = useState("unam-light-theme");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      setSelected("unam-dark-theme");
    } else if (theme === "contrast") {
      setSelected("Contraste");
    } else {
      setSelected("unam-light-theme");
    }
  }, [theme]);

  const handleThemeChange = (key: string) => {
    setSelected(key);
    switch (key) {
      case "unam-dark-theme":
        setTheme("dark");
        break;
      case "unam-light-theme":
        setTheme("light");
        break;
      case "Contraste":
        setTheme("contrast");
        break;
      default:
        setTheme("light");
    }
  };

  return (
    <Tabs
      aria-label="Theme options"
      color="primary"
      variant="bordered"
      selectedKey={selected}
      onSelectionChange={(key) => handleThemeChange(key.toString())}
      className="bg-gradient-to-r from-primary/10 to-transparent p-2 rounded-lg shadow-soft transition-all duration-300 ease-in-out"
    >
      <Tab
        key="unam-light-theme"
        title={
          <div className="flex items-center space-x-2 hover:!text-primary hover:bg-primary/10 px-2 py-1 rounded-md transition-all duration-200">
            <Sun className="w-5 h-5" aria-label="Tema claro" />
            <span>Claro</span>
          </div>
        }
      />
      <Tab
        key="unam-dark-theme"
        title={
          <div className="flex items-center space-x-2 hover:!text-primary hover:bg-primary/10 px-2 py-1 rounded-md transition-all duration-200">
            <Moon className="w-5 h-5" aria-label="Tema oscuro" />
            <span>Oscuro</span>
          </div>
        }
      />
      <Tab
        key="Contraste"
        title={
          <div className="flex items-center space-x-2 hover:!text-primary hover:bg-primary/10 px-2 py-1 rounded-md transition-all duration-200">
            <Contrast className="w-5 h-5" aria-label="Tema contraste" />
            <span>Contraste</span>
          </div>
        }
      />
    </Tabs>
  );
}