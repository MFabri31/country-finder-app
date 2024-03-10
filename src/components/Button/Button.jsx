import { Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export const MyButton = () => {
  return (
    <Button my="2rem" px="2em" shadow="md">
      <ArrowBackIcon marginRight="0.5em" />
      Back
    </Button>
  );
};
