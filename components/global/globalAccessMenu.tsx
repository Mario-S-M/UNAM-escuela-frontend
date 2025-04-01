"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button
} from "@heroui/react";
import { PersonStanding } from "lucide-react";
import { ToogleTheme } from "../ui/toggle-Theme";
import FontSizeChanger from "../ui/toggle-Font";

export default function GlobalAccessMenu() {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button isIconOnly radius="full" size="lg" className="text-background">
          <PersonStanding size={54} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid grid-cols-3 gap-2 px-1 py-2">
          <ToogleTheme />
          <FontSizeChanger />
        </div>
      </PopoverContent>
    </Popover>
  );
}
