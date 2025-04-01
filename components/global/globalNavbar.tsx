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
import { data } from "framer-motion/client";

function GlobalNavbar() {
  const router = useRouter();
  const {
    data: levels,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["levels"],
    queryFn: getAllLevels,
  });
  console.log(levels);
  const menuItems = levels?.data.map((level) => level.name).sort() || [];
  return (
    <>
      <Navbar isBordered disableAnimation className="bg-primary text-white">
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <GlobalLogoUNAM />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="sm:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={`nav-${index}`}>
              <Link href="#" className="text-background">
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="default"
                fallback={<User />}
                size="sm"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat" disabledKeys={["profile"]}>
              <DropdownItem
                key="profile"
                color="primary"
                className="gap-2"
                classNames={{
                  title: "text-black",
                  base: "text-black",
                }}
              >
                <p className="font-semibold">Hola: </p>
              </DropdownItem>
              <DropdownItem
                key="settings"
                classNames={{
                  title: "text-black",
                  base: "text-black",
                }}
              >
                Opciones de Administrador
              </DropdownItem>
                <DropdownItem
                  key="team_settings"
                  classNames={{
                    title: "text-black",
                    base: "text-black",
                  }}
                  onPress={() => router.replace("/auth/login")}
                >
                  Iniciar Sesión
                </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                classNames={{
                  base: "text-black",
                }}
              >
                Cerrar Sesión
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}

export default GlobalNavbar;