import { Input } from "@heroui/input";

const GlobalInput = () => {
  return (
    <>
      <Input
        label={`Hola`}
        type={`email`}
        name={``}
        placeholder={`Hola`}
        isDisabled={false}
        isReadOnly={false}
        isRequired={true}
        size={"lg"}
        color={`primary`}
        variant={`bordered`}
        radius={`lg`}
        labelPlacement={`inside`}
        isClearable={true}
        defaultValue={``}
        startContent={``}
        endContent={``}
        description={``}
        isInvalid={true}
        errorMessage={`Error`}
      />
    </>
  );
};

export default GlobalInput;
