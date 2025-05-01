"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import GlobalLogoUNAM from "./globalLogoUNAM";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getAllLevels } from "@/app/actions";
import { useState } from "react";

function GlobalNavbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: levels } = useQuery({
    queryKey: ["levels"],
    queryFn: getAllLevels,
  });
  const menuItems = levels?.data.map((level) => level.name).sort() || [];

  return (
    <Navbar
      isBordered
      disableAnimation
      className="bg-primary text-white"
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Toggle para pantallas pequeñas */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="text-white"
        />
      </NavbarContent>

      {/* Logo centrado en pantallas pequeñas, alineado a la izquierda en pantallas grandes */}
      <NavbarContent className="sm:flex" justify="center">
        <NavbarBrand className="flex justify-center sm:justify-start">
          <GlobalLogoUNAM />
        </NavbarBrand>
      </NavbarContent>

      {/* Menú de navegación: oculto en pantallas pequeñas, visible en sm y mayores */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`nav-${index}`}>
            <Link
              href="#"
              className="transition-colors text-base font-medium text-black dark:text-white"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Avatar y dropdown */}
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform w-10 h-10 sm:w-12 sm:h-12"
              color="default"
              fallback={<User className="w-5 h-5 sm:w-6 sm:h-6" />}
              size="sm"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat" disabledKeys={["profile"]}>
            <DropdownItem
              key="profile"
              color="primary"
              className="gap-2"
              classNames={{
                title: "text-black dark:text-white",
                base: "text-black dark:text-white",
              }}
            >
              <p className="font-semibold">Hola:</p>
            </DropdownItem>
            <DropdownItem
              key="settings"
              classNames={{
                title: "text-black dark:text-white",
                base: "text-black dark:text-white",
              }}
            >
              Opciones de Administrador
            </DropdownItem>
            <DropdownItem
              key="team_settings"
              classNames={{
                title: "text-black dark:text-white",
                base: "text-black dark:text-white",
              }}
              onPress={() => router.replace("/auth/login")}
            >
              Iniciar Sesión
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              classNames={{
                base: "text-black dark:text-white",
              }}
            >
              Cerrar Sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      {/* Menú móvil para pantallas pequeñas */}
      <NavbarMenu className="bg-primary/95 backdrop-blur-sm py-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-black dark:text-white hover:text-gray-200 transition-colors text-lg"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default GlobalNavbar;