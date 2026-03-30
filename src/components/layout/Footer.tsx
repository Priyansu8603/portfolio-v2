import { Divider, Flex, Stack } from "@chakra-ui/react";

import Links from "../pages/about/Links/index";

const Footer = () => {
  return (
    <Stack as="footer" width="full" layerStyle="layoutBlock" spacing={6}>
      <Divider />
      <Flex justify="center">
        <Links />
      </Flex>
    </Stack>
  );
};

export default Footer;
