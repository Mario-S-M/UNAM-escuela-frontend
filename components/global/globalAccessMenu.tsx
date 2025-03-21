"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  NumberInput,
} from "@heroui/react";
import { PersonStanding } from "lucide-react";

export default function GlobalAccessMenu() {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button isIconOnly radius="full" size="md" style={{ backgroundColor: "#e9ae3c" }} className="text-white">
          <PersonStanding size={36} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid grid-cols-3 gap-2 px-1 py-2">
          <NumberInput
            label="Tamaño de Letra"
            placeholder="12px"
            minValue={6}
            maxValue={64}
          />
          <NumberInput
            label="Tamaño de Letra"
            placeholder="12px"
            minValue={6}
            maxValue={64}
          />
          <NumberInput
            label="Tamaño de Letra"
            placeholder="12px"
            minValue={6}
            maxValue={64}
          />
          <NumberInput
            label="Tamaño de Letra"
            placeholder="12px"
            minValue={6}
            maxValue={64}
          />
          <NumberInput
            label="Tamaño de Letra"
            placeholder="12px"
            minValue={6}
            maxValue={64}
          />
          <NumberInput
            label="Tamaño de Letra"
            placeholder="12px"
            minValue={6}
            maxValue={64}
          />
          <NumberInput
            label="Tamaño de Letra"
            placeholder="12px"
            minValue={6}
            maxValue={64}
          />
          <NumberInput
            label="Tamaño de Letra"
            placeholder="12px"
            minValue={6}
            maxValue={64}
          />
          <NumberInput
            label="Tamaño de Letra"
            placeholder="12px"
            minValue={6}
            maxValue={64}
          />
          <NumberInput
            label="Tamaño de Letra"
            placeholder="12px"
            minValue={6}
            maxValue={64}
          />
          <NumberInput
            label="Tamaño de Letra"
            placeholder="12px"
            minValue={6}
            maxValue={64}
          />
          <NumberInput
            label="Tamaño de Letra"
            placeholder="12px"
            minValue={6}
            maxValue={64}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
