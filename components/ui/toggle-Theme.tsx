"use client";
import { useState, useEffect } from "react";
import { Tabs, Tab } from "@heroui/react";
import { Contrast, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function  ToogleTheme() {
    const [selected, setSelected] = useState("unam-light-theme");
    const { theme, setTheme } = useTheme();
  
    useEffect(() => {
      // Sincronizar el tema inicial
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
      switch(key) {
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
        aria-label="Options" 
        color="primary" 
        variant="bordered" 
        selectedKey={selected}
        onSelectionChange={(key) => handleThemeChange(key.toString())}
      >
        <Tab
          key="unam-dark-theme"
          
          title={
            <div className="flex items-center space-x-2 hover:!text-inherit">
              <Moon />
              <span>Oscuro</span>
            </div>
          }
        />
        <Tab
          key="unam-light-theme"
          title={
            <div className="flex items-center space-x-2 hover:!text-inherit">
              <Sun />
              <span>Claro</span>
            </div>
          }
        />
        <Tab
          key="Contraste"
          title={
            <div className="flex items-center space-x-2 hover:!text-inherit">
              <Contrast />
              <span>Contraste</span>
            </div>
          }
        />
      </Tabs>
    )
};