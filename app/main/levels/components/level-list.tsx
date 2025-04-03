"use client";
import { getAllLevels } from "@/app/actions";
import { useQuery } from "@tanstack/react-query";
import { Button, Card, CardBody } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function LevelList() {
  const router = useRouter();
  const {
    data: levels,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["levels"],
    queryFn: getAllLevels,
  });

  if (error) return <div>Error: {(error as Error).message}</div>;
  if(isLoading) return <div>Loading...</div>;
  // if (isLoading)
  //   return (
  //     <>
  //       <Card className="w-[400px] space-y-5 p-4" radius="lg">
  //         <div className="space-y-3">
  //           <Skeleton className="w-3/5 rounded-lg">
  //             <div className="h-6 w-4/5 rounded-lg bg-default-200" />
  //           </Skeleton>
  //           <Skeleton className="w-2/5 rounded-lg">
  //             <div className="h-3 w-2/5 rounded-lg bg-default-300" />
  //           </Skeleton>
  //         </div>
  //       </Card>
  //     </>
  //   );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {levels?.data.sort((a, b) => a.name.localeCompare(b.name)).map((level) => (
        <Card
          key={level.id}
          className="w-full max-w-sm border-gray-400 border-3 rounded-lg p-4 bg-transparent"
        >
          {/* TODO: Agregar configuración para más temas */}
          <CardBody className="gap-4 relative">
            <div className="space-y-2">
              <h2 className="text-3xl text-black dark:text-white font-bold">
                {level.name}
              </h2>
              <p className="text-sm text-black dark:text-white opacity-75">{level.description}</p>
              <Button
                onPress={() => router.push(`/main/levels/${level.id}/view`)}
              >
                Ir al nivel
              </Button>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
