import {Button} from "@heroui/button";

const GlobalButton = () => {
  return (
    <>
      <Button
        isDisabled={false}
        size="lg"
        radius="lg"
        color="primary"
        variant={`ghost`}
        isLoading={false}
        endContent={``}
        startContent={``}
        isIconOnly={false}
      >
        Hola
      </Button>
    </>
  );
};

export default GlobalButton;
