"use client";

import { levelFormSchema } from "@/app/schemas/level.schema";
import { BookPlus } from "lucide-react";
import GlobalTextArea from "@/components/global/globalTextArea";
import GlobalInput from "@/components/global/globalInput";
import GlobalButton from "@/components/global/globalButton";
import { useRef } from "react";

interface CreateLevelFormProps {
  onSubmit: (data: FormData) => Promise<void>;
}

export function CreateLevelForm({ onSubmit }: CreateLevelFormProps) {
  const nameErrorRef = useRef<HTMLInputElement>(null);
  const descriptionErrorRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (nameErrorRef.current) {
      nameErrorRef.current.setCustomValidity("");
    }
    if (descriptionErrorRef.current) {
      descriptionErrorRef.current.setCustomValidity("");
    }

    const formData = new FormData(form);
    const rawData = {
      name: formData.get("name")?.toString() || "",
      description: formData.get("description")?.toString() || "",
    };

    const result = levelFormSchema.safeParse(rawData);

    if (!result.success) {
      result.error.errors.forEach((error) => {
        if (error.path[0] === "name" && nameErrorRef.current) {
          nameErrorRef.current.setCustomValidity(error.message);
        }
        if (error.path[0] === "description" && descriptionErrorRef.current) {
          descriptionErrorRef.current.setCustomValidity(error.message);
        }
      });
      return;
    }

    await onSubmit(formData);
    form.reset();

    // Clear errors after successful submission
    if (nameErrorRef.current) {
      nameErrorRef.current.setCustomValidity("");
    }
    if (descriptionErrorRef.current) {
      descriptionErrorRef.current.setCustomValidity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <GlobalInput
          ref={nameErrorRef}
          name="name"
          label="Nombre"
          isRequired={true}
          startContent={<BookPlus className="text-gray-500" />}
          errorMessage={nameErrorRef.current?.validationMessage}
          isInvalid={!!nameErrorRef.current?.validationMessage}
        />
      </div>
      <div>
        <GlobalTextArea
          ref={descriptionErrorRef}
          name="description"
          label="Descripción"
          isRequired={true}
          placeholder="Escribe una descripción detallada del nivel..."
          minRows={3}
          maxRows={6}
          errorMessage={descriptionErrorRef.current?.validationMessage}
          isInvalid={!!descriptionErrorRef.current?.validationMessage}
        />
      </div>
      <div className="flex justify-end gap-2">
        <GlobalButton type="submit" color="success">
          Crear Nivel
        </GlobalButton>
      </div>
    </form>
  );
}
