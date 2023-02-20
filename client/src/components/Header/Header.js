import { Box, Button, Grid, Heading } from "@chakra-ui/react";

export const Header = ({ text }) => {
  return (
    <Grid padding="10" gap="">
      <Heading size="xl" color={"brand.secText"}>
        {text}
      </Heading>
    </Grid>
  );
};
